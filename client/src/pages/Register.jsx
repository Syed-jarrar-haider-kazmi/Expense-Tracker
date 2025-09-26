import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/auth";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = async (form) => {
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Register</h2>

          <RegisterForm onSubmit={handleRegister} error={error} />

          <p className="text-sm mt-2">
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
