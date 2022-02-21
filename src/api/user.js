import api from "../api/index";

const User = {
  login: (data) => {
    return api.post("/login", data);
  },

  logout: () => {
    return api.post("logout");
  },

  getAuthenticatedUser: () => {
    return api.get("/user");
  },
};

export default User;
