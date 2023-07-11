import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";

const AddUser = () => {
  const [user, setUser] = useState({
    customerId: "",
    name: "",
    identity: "",
    password:"",
    emailId:"",

  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    MovieService.saveUser(user)
      .then((response) => {
        console.log(response);
        navigate("/userList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setUser({
        customerId: "",
        name: "",
        identity: "",
        password:"",
        emailId:"",

    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New User</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            User Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email ID
          </label>
          <input
            type="email"
            name="emailId"
            value={user.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">
  Identity
</label>
<div className="flex mt-2">
  <label className="inline-flex items-center mr-4">
    <input
      type="radio"
      name="identity"
      value="M"
      checked={user.identity === "M"}
      onChange={(e) => handleChange(e)}
      className="form-radio h-5 w-5 text-gray-600"
    />
    <span className="ml-2 text-gray-600">Male</span>
  </label>
  <label className="inline-flex items-center mr-4">
    <input
      type="radio"
      name="identity"
      value="F"
      checked={user.identity === "F"}
      onChange={(e) => handleChange(e)}
      className="form-radio h-5 w-5 text-gray-600"
    />
    <span className="ml-2 text-gray-600">Female</span>
  </label>
  <label className="inline-flex items-center">
    <input
      type="radio"
      name="identity"
      value="O"
      checked={user.identity === "O"}
      onChange={(e) => handleChange(e)}
      className="form-radio h-5 w-5 text-gray-600"
    />
    <span className="ml-2 text-gray-600">Others</span>
  </label>
</div>

        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveUser}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
