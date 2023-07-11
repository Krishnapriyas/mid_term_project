import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user, deleteUser }) => {
  const navigate = useNavigate();

  const editUser = (e, customerId) => {
    e.preventDefault();
    navigate(`/editUser/${customerId}`);
  };

  return (
    <tr key={user.customerId} >
    <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{user.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{user.emailId}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{user.identity}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500"> {user.password}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e) => editUser(e, user.customerId)}
          className="text-blue-600 hover:text-red-800 ml-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-100 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-opacity-50">
        
          Edit
        </a>
        <a
          onClick={(e) => deleteUser(e, user.customerId)}
          className="text-red-600 hover:text-red-800 ml-2 px-4 py-2 text-sm font-medium rounded-md bg-red-100 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-opacity-50">
        
          Delete
        </a>
      </td>
    </tr>
  );
};

export default User;
