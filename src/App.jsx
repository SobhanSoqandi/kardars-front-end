import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Banner from "./pages/home/Banner";
import Login from "./pages/login/Login";
import CompanyRegistration from "./pages/login/CompanyRegistration";
import CompanyPenel from "./pages/companyPenel/CompanyPenel";
import StudentRegisteration from "./pages/login/StudentRegisteration";
import AllCompany from "./pages/allcompany/AllCompany";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<CompanyRegistration />} path="/CompanyRegistration" />
        <Route element={<StudentRegisteration />} path="/studentRegisteration" />
        <Route element={<AllCompany />} path="/all" />
        <Route element={<CompanyPenel />} path="/company-panel" />
      </Routes>
    </>
  );
}

export default App;
