import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { Toaster } from "react-hot-toast";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    gender: "male",
  });

  const { signupApi, loading } = useSignup();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async () => {
    await signupApi(input);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <Toaster />
      <img src={logo} className="logo" alt="" />
      <div className="login-container">
        <div className="login-model">
          <h2>Create an Account</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={input.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
          />
          <div className="flex justify-start items-center w-11/12 gap-8">
            <div className="flex justify-between items-center radio-button gap-4 p-3">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <label>Male</label>
            </div>
            <div className="flex justify-between items-center gap-4 p-3">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <label>Female</label>
            </div>
          </div>

          {loading ? (
            <button>
              <span className="loading loading-spinner h-full"></span>
            </button>
          ) : (
            <button onClick={handleSubmit} onKeyDown={handleKeyDown}>
              Create Account
            </button>
          )}
          <p>
            Have an account? &nbsp;
            <Link className="link" to={"/login"}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
