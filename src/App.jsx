import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Success from "./Components/Success.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}