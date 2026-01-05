import checkUser from "./checkUser";

export default function checkRole() {
  if (checkUser()) {
    const info = JSON.parse(localStorage.getItem("personalInfo"));
    return info.role;
  }
}
