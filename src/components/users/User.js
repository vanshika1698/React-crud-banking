import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const loadUser = async () => {
      const res = await axios.get(`http://localhost:3003/users/${id}`);
      setUser(res.data);
    };
    loadUser();
    console.log(user);
  }, []);
  return (
    <div className="container py-4">
      {/* <Link className="btn btn-primary" to="/">
        back to Home
      </Link> */}
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">Account Type: {user.accountType}</li>
        <li className="list-group-item">
          Account Number: {user.accountNumber}
        </li>
        <li className="list-group-item">Balance: {user.balance}</li>
        <li className="list-group-item">
          Address: {user?.address?.street}
          <br />
          Suite: {user?.address?.suite} <br />
          City: {user?.address?.city}
          <br></br>
          Zipcode: {user?.address?.zipcode}
        </li>
      </ul>
      <button
        className="btn btn-success btn-block"
        onClick={() => history.push(`/users/edit/${id}`)}
      >
        edit
      </button>
    </div>
  );
};

export default User;
