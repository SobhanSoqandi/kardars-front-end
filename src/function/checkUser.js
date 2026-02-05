export default function checkUser() {
  const raw = localStorage.getItem("personalInfo");

  if (!raw || raw === "undefined") {
    return false;
  }

  try {
    const parsed = JSON.parse(raw);
    return !!parsed;
  } catch (error) {
    localStorage.removeItem("personalInfo");
    return false;
  }
}
