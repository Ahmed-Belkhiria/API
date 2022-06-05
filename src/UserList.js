import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setListOfUsers(res.data);
    };
    fetchUsers();
    console.log(listOfUsers);
  }, []);

  return (
    <div className="usersContainer">
      <h1 style={{ textAlign: "center" }}>List Of Users</h1>
      <div className="usersWrapper">
        {listOfUsers.map((user) => (
          <div className="userCard">
            <div className="userCardTop">
              <img src="/noAvatar.png" className="avatar" />
              <div className="userCardTopDetails">
                <span>ID: {user.id}</span>
                <span>Name: {user.name}</span>
                <span> Username: {user.username}</span>
              </div>
            </div>
            <div className="userCardContact">
              <span> Contact: </span>
              <ul>
                <li>Email: {user.email}</li>
                <li>phone: {user.phone}</li>
                <li>website: {user.website}</li>
              </ul>
            </div>
            <div className="userCardAddress">
              <span> Address: </span>
              <ul>
                <li>Street: {user.address.street}</li>
                <li>suite: {user.address.suite}</li>
                <li>city: {user.address.city}</li>
                <li>Zip: {user.address.zipcode} </li>
              </ul>
            </div>
            <div className="userCardCompany">
              <span> Company: </span>
              <ul>
                <li>Name: {user.company.name}</li>
                <li>Catch Phrase: {user.company.catchPhrase}</li>
                <li>bs: {user.company.bs}</li>
              </ul>
            </div>
            <div className="userCardTop"></div>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default UserList;
