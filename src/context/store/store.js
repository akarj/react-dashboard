export const INITIAL_STATE = {
  darkMode: false,
  email: "",
  password: "",
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};
