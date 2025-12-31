import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Banner from "./pages/home/Banner";
import Login from "./pages/login/Login";
import CompanyRegistration from "./pages/login/CompanyRegistration";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<CompanyRegistration />} path="/CompanyRegistration" />
      </Routes>
    </>
  );
}

export default App;
