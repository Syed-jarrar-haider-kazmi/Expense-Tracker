import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/auth";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async ({ email, password }) => {
    try {
      const res = await loginUser({ email, password });
      login(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>

          <LoginForm onSubmit={handleLogin} error={error} />

          <p className="text-sm mt-2">
            No account?{" "}
            <Link className="link" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
