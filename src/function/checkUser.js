export default function checkUser() {
  const info = localStorage.getItem("personalInfo");
  return !!info;
}
