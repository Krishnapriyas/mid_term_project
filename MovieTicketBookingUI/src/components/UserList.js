import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";
import User from "./User";
import Sidebar from "./SideBar";

const UserList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MovieService.getAllUsers();
        setUser(response.data);
      } catch (error) {
        setUser([]);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterUsers = () => {
      if (user && searchTerm.trim() !== "") {
        const filtered = user.filter(
          (user) =>
            (user.name &&
              user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.emailId &&
              user.emailId.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.identity &&
              user.identity.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers(user);
      }
    };
    filterUsers();
  }, [user, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const deleteUser = (e, customerId) => {
    e.preventDefault();
    MovieService.deleteUserById(customerId).then((res) => {
      if (user) {
        setUser((prevElement) => {
          return prevElement.filter(
            (user) => user.customerId !== customerId
          );
        });
      }
    });
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
            onClick={() => navigate("/addUser")}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold "
          >
            Add User
          </button>

          <input
            type="text"
            placeholder="Search by user name or email Id or gender"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: "400px" }}
          />
        </div>
        <div className="shadow border-b mb-4">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                  User Name
                </th>
                <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                  Email ID
                </th>
                <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                  Identity
                </th>
                <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                  Password
                </th>
                <th className="text-right font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && filteredUsers && (
              <tbody className="bg-white">
                {filteredUsers.map((user) => (
                  <User
                    user={user}
                    deleteUser={deleteUser}
                    key={user.customerId}
                  ></User>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
