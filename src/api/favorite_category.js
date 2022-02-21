import api from "./index";

const FavoriteCategory = {
  all: () => {
    return api.get("/favorite_categories");
  },

  newCategory: (data) => {
    return api.post("/favorite_categories", data);
  },

  setFavoriteWithoutCategory: (id) => {
    return api.put(`/records/favorites/${id}`);
  },

  setFavoriteWithCategory: (categoryId, id) => {
    return api.put(`/favorite_categories/${categoryId}/add_favorite/${id}`);
  },

  favoritesFromCategory: (id) => {
    return api.get(`/favorite_categories/${id}/favorites`);
  },

  removeFavFromCategory: (categoryId, id) => {
    return api.put(`/favorite_categories/${categoryId}/remove_favorite/${id}`);
  },
};

export default FavoriteCategory;
