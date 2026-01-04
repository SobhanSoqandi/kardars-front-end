import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Banner from "./pages/home/Banner";
import Login from "./pages/login/Login";
import CompanyRegistration from "./pages/login/CompanyRegistration";
import CompanyPenel from "./pages/companyPenel/CompanyPenel";
import StudentRegisteration from "./pages/login/StudentRegisteration";
import AllCompany from "./pages/allcompany/AllCompany";
import StudentPanel from "./pages/studentPanel/StudentPanel";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />

          <Route element={<StudentRegisteration />} path="/studentRegisteration" />

          <Route element={<CompanyPenel />} path="/company-panel" />
          <Route
            element={<CompanyRegistration />}
            path="/CompanyRegistration"
          />
          <Route element={<StudentPanel />} path="student-panel" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>

    </>
  );
}

export default App;
