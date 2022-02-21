import api from "./index";

const Report = {
  all: () => {
    // const token = localStorage.getItem("id_token");
    return api.get("/records");
  },

  keystrokes: () => {
    return api.get("/records/keystrokes");
  },

  handleArchivedStatus: (id) => {
    return api.put(`/records/archived/${id}`);
  },

  removeFavorite: (id) => {
    return api.put(`/records/favorites/${id}`);
  },

  favorites: () => {
    return api.get("/records/favorites");
  },

  getReportContent: (id) => {
    return api.get(`records/${id}/content`);
  },
};

export default Report;
