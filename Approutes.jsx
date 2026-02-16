import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/dashboard";
import Documents from "@/pages/documents";
import Query from "@/pages/query";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/query" element={<Query />} />
    </Routes>
  );
}

export default AppRoutes;
