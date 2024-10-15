import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    return setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      // const response = await fetch("/api/auth/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await response.json();

      const response = await axios.post("/api/auth/register", formData);
      const data = response.data;

      if (data.success) {
        // console.log(data.user);
        setLoading(false);
        setError(false);
        setFormData({});
        navigate("/");
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-10 mb-12">
          Signup
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            className="bg-slate-100 p-3 rounded-lg"
            onPaste={(e) => e.preventDefault()}
            onChange={(e) =>
              formData.password === e.target.value
                ? setConfirmPasswordError(false)
                : setConfirmPasswordError(true)
            }
          />

          {confirmPasswordError && (
            <p className="text-red-500">
              *confirm password not matches password
            </p>
          )}

          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to="/signin">
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
        <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
      </div>
    </>
  );
};

export default Signup;
