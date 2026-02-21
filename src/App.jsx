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

import { Toaster } from "react-hot-toast";

import DetailCompany from "./pages/home/intershipdetail/component/DetailCompany";
import AddCompany from "./pages/addcompany/AddCompany";
import EditProfileStudent from "./pages/login/EditProfileStudent";
import EditProfileCompany from "./pages/login/EditProfileCompany";
import CheckOtp from "./pages/login/CheckOtp";
import GroupManager from "./pages/GroupManager/GroupManager";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />

          <Route
            element={<StudentRegisteration />}
            path="/studentRegisteration"
          />

          <Route element={<AllCompany />} path="all" />

          <Route element={<CompanyPenel />} path="/company-panel" />
          <Route element={<GroupManager />} path="/groupmanager-panel" />
          <Route
            element={<CompanyRegistration />}
            path="/CompanyRegistration"
          />
          <Route element={<StudentPanel />} path="student-panel" />
          <Route element={<DetailCompany />} path="company-detail" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<CheckOtp />} path="verify" />
        <Route element={<AddCompany />} path="add" />
        <Route element={<EditProfileStudent />} path="edit-student" />
        <Route element={<EditProfileCompany />} path="edit-company" />
      </Routes>
    </>
  );
}

export default App;
