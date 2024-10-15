import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
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

      const response = await axios.post("/api/auth/login", formData);
      const data = response.data;

      if (data.success) {
        console.log(data.user);
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
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="nameEmail"
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

          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="flex gap-2 mt-5">
          <p>Don&apos;t have an account?</p>
          <Link to="/signin">
            <span className="text-blue-500">Sign up</span>
          </Link>
        </div>
        <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
      </div>
    </>
  );
};

export default Login;
