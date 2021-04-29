import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import "./SignIn.css";
const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    const response = await axios(
      `http://localhost:3003/users?username=${userName}&password=${password}`
    );
    localStorage.setItem("user", userName);
    console.log(response?.data[0]);
    setUserName("");
    setPassword("");
    response?.data[0].role === "admin"
      ? history.push("/")
      : history.push(`/users/${response?.data[0].id}`);
  };

  return (
    <div className="signin">
      <form className="box">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
        />
        <button className="btn btn-primary btn-block" onClick={submit}>
          sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
