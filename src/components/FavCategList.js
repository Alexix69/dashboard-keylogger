import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import useSWR from "swr";
import { useEffect, useState } from "react";
import FavoriteCategory from "../api/favorite_category";

const FavCategList = ({ newNumber, queryTrigger, setIndexToSend }) => {
  const [isSelected, setIsSelected] = useState("");
  const [idCategory, setIdCategory] = useState("");

  const handleListItemClick = (event, index) => {
    // setSelectedIndex(index);
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  // console.log("EJECUCION ...");
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/favorite_categories`,
    fetcher,
    {
      refreshInterval: 5000,
    }
  );
  //console.log("DATA", data);
  // console.log("... de SWR");

  if (error) {
    console.log("HA OCURRIDO UN ERROR", error);
  }

  if (!!data) {
    console.log("ES DATA DE CATEGR", data);
  }

  useEffect(() => {
    console.log("CATEGORIA SELECCIONADA", isSelected);
  }, [isSelected]);

  useEffect(() => {
    console.log("CATEGORIA SELECCIONADA", idCategory);
  }, [idCategory]);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          onClick={() => {
            setIsSelected("0");
            setIndexToSend("0");
          }}
          selected={isSelected === "0"}
          // selected={() => console.log("selecionado", 2)}
          // onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="No asignar categoría" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        {!!data ? (
          data.map((category, index) => {
            return (
              <ListItemButton
                selected={isSelected === category.id}
                // onClick={() => console.log("selecionda", category.id)}
                // onClick={() => setIsSelected(index)}
                key={category.id}
                onClick={() => {
                  setIndexToSend(category.id);
                  setIdCategory(category.id);
                  setIsSelected(category.id);
                }}
              >
                <ListItemIcon>
                  <FolderSpecialIcon />
                </ListItemIcon>
                <ListItemText primary={category.folder_name} />
              </ListItemButton>
            );
          })
        ) : (
          <p>Cargando categorías ...</p>
        )}
      </List>
    </Box>
  );
};

export default FavCategList;
//
// const [favoriteCategories, setFavoriteCategories] = useState([]);
// const [queryT, setQueryT] = useState(queryTrigger);

// useEffect(() => {
//   console.log("FAVORITE CATEGORIRES", favoriteCategories);
// }, [favoriteCategories]);
//
// useEffect(() => {
//   const getData = async () => {
//     try {
//       const response = await FavoriteCategory.all();
//       setFavoriteCategories(response.data);
//     } catch (e) {
//       console.log("ERROR", e);
//     }
//   };
//
//   getData();
// }, [queryT]);
