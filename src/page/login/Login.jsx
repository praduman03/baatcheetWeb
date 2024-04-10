import "./Login.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
// import { Toaster } from "react-hot-toast";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { loading, loginApi } = useLogin();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async () => {
    await loginApi(input);
  };
  return (
    <>
      {/* <Toaster /> */}
      <img src={logo} className="logo" alt="" />
      <div className="login-container">
        <div className="login-model">
          <h2>Welcome back</h2>
          <input
            type="text"
            placeholder="username or email"
            name="username"
            value={input.username}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={input.password}
            onChange={handleInput}
          />
          {loading ? (
            <button>
              <span className="loading loading-spinner h-full"></span>
            </button>
          ) : (
            <button onClick={handleSubmit}>Login</button>
          )}
          <p>
            {"Don't"} have an account? &nbsp;
            <Link className="link" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
