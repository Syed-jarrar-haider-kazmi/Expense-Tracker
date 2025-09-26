import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Expenses from "./pages/Expenses";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute><Expenses /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
