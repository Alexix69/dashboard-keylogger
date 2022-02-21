import api from "./index";

const Client = {
  all: () => {
    return api.get("/clients");
  },
};

export default Client;
