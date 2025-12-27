import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Banner from "./pages/home/Banner";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
