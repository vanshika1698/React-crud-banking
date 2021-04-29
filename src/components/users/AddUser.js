import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    accountNumber: "",
    accountType: "",
  });
  const [address, setAddress] = useState({
    suite: "",
    street: "",
    city: "",
    zip: "",
  });

  const {
    name,
    username,
    email,
    phone,
    website,
    accountType,
    accountNumber,
  } = user;
  const { city, zip, suite, street } = address;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onAddressInputChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const userToSave = { ...user, address: { street, suite, city, zip } };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(userToSave);
    await axios.post("http://localhost:3003/users", userToSave);
    history.push("/");
    setUser({ user: {} });
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control form-control-lg"
              aria-label="Default select example"
              name="accountType"
              value={accountType}
              onChange={(e) => onInputChange(e)}
            >
              <option defaultValue>select the appropriate one</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              required
              placeholder="Account number"
              name="accountNumber"
              value={accountNumber}
              onChange={(e) => onInputChange(e)}
            />
            <div className="invalid-feedback">
              Please provide Account number
            </div>
          </div>
          {/*  */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="City"
              required
              name="city"
              onChange={(e) => onAddressInputChange(e)}
              value={city}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ZIP"
              required
              name="zip"
              value={zip}
              onChange={(e) => onAddressInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Street"
              required
              name="street"
              value={street}
              onChange={(e) => onAddressInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Suite"
              required
              name="suite"
              value={suite}
              onChange={(e) => onAddressInputChange(e)}
            />
          </div>
          {/*  */}
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;