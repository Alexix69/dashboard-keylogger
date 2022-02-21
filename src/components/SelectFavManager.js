import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { Chip, Grid } from "@mui/material";
import Report from "../api/report";
import FavoriteCategory from "../api/favorite_category";

const SelectFavManager = ({
  setData,
  updateConfirmation,
  setConditionalIndex,
}) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  // console.log("EJECUCION ...");
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/favorite_categories`,
    fetcher
    // {
    //   refreshInterval: 5000,
    // }
  );
  //console.log("DATA", data);
  // console.log("... de SWR");

  if (error) {
    console.log("HA OCURRIDO UN ERROR", error);
  }

  if (!!data) {
    console.log("ES DATA DE CATEGR", data);
  }
  //REVISAR VALUE DE MENUITEM, SE SELECCIONA CON ESO EL VALOR POR DEFECTO DE SELECT
  const [selectedItemId, setSelectedItemId] = useState(0);

  const handleChange = (event) => {
    setSelectedItemId(event.target.value);
  };

  const getFavorites = async () => {
    try {
      const response = await Report.favorites();
      // console.log("resoose de select", response.data.data);
      setData(response.data.data);
    } catch (e) {
      console.log("Error at GetData");
    }
  };

  const getFavoritesFromCategory = async (categoryId) => {
    try {
      const response = await FavoriteCategory.favoritesFromCategory(categoryId);
      setData(response.data.data);
    } catch (e) {
      console.log("Error at Get favorites from category", e);
    }
  };

  useEffect(() => {
    console.log("VALUE DE SELECTED ITEM", selectedItemId);
    setConditionalIndex(selectedItemId);
    if (selectedItemId === 0) {
      getFavorites();
    }

    if (selectedItemId !== 0) {
      getFavoritesFromCategory(selectedItemId);
    }
  }, [selectedItemId, updateConfirmation]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Ver favoritos
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedItemId}
          onChange={handleChange}
          autoWidth
          label="Ver favoritos"
        >
          {/*<MenuItem value="">*/}
          {/*  <em>None</em>*/}
          {/*</MenuItem>*/}
          <MenuItem value={0} defaultValue={0}>
            Favoritos sin categoría
          </MenuItem>
          {/*<ListSubheader>Categorías</ListSubheader>*/}
          <Divider>
            <Chip label="Categorías" />
          </Divider>

          {!!data ? (
            data.map((category) => {
              return (
                <MenuItem value={category.id} key={category.id}>
                  {category.folder_name}
                </MenuItem>
              );
            })
          ) : (
            <p>Cargando ...</p>
          )}
          {/*<MenuItem*/}
          {/*  value={10}*/}
          {/*  onClick={() => console.log("TWEBTYS")}*/}
          {/*  autoFocus*/}
          {/*  selected={true}*/}
          {/*>*/}
          {/*  Twenty*/}
          {/*</MenuItem>*/}
          {/*<MenuItem value={21} selected="true">*/}
          {/*  Twenty one*/}
          {/*</MenuItem>*/}
          {/*<MenuItem value={22}>Twenty one and a half</MenuItem>*/}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectFavManager;
