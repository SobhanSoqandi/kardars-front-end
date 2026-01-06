import checkUser from "./checkUser";

export default function getUserInfo() {
  if (checkUser()) {
    return JSON.parse(localStorage.getItem("personalInfo"));
  }
}
