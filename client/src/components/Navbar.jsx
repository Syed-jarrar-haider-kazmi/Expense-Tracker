import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-300 px-4">
      <div className="flex-1">
        <span className="font-bold text-lg">Expense Tracker</span>
      </div>
      <div className="flex-none">
        {user && (
          <div className="flex items-center gap-3">
            <span className="text-sm">Hi, {user.name}</span>
            <button className="btn btn-sm btn-outline" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}