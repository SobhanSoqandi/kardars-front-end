import checkUser from "./checkUser";

export default function getToken() {
  if (checkUser()) {
    return JSON.parse(localStorage.getItem("personalInfo")).token;
  }
}
