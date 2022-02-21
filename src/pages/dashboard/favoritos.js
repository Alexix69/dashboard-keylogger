import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Layout from "../../components/Layout";
import FavoritesTable from "../../components/FavoritesTable";
import useSWR from "swr";
import SelectFavManager from "../../components/SelectFavManager";
import withAuth from "../../hocs/withAuth";

const Favorites = () => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  //
  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/records/favorites`,
  //   fetcher,
  //   {
  //     refreshInterval: 1000,
  //   }
  // );
  //
  // if (data === null) {
  //   console.log("CARGANDO DATOS");
  // }

  //DATOS PARA PRESENTAR EN LA TABLA
  const [dataToTable, setDataToTable] = useState([]);
  const setDataFromSelect = (data) => {
    setDataToTable(data);
  };

  //DISPARADOR DE ACTUALIZACIÓN DE DATOS PARA LA TABLA
  const [dataUpdateIndicator, setDataUpdateIndicator] = useState(false);
  const requestUpdate = () => {
    setDataUpdateIndicator((prevState) => !prevState);
  };

  //PROVEEDOR DE INFORMACIÓN DE CATEGORIA SELECCIONADA
  const [selectItemIndicator, setSelectItemIndicator] = useState("");
  const setConditionalIndex = (index) => {
    setSelectItemIndicator(index);
  };

  useEffect(() => {
    console.log("SELECT ITEM INDICATOR", selectItemIndicator);
  }, [selectItemIndicator]);

  useEffect(() => {
    console.log("CAMBIO A TRUE", dataUpdateIndicator);
  }, [dataUpdateIndicator]);
  return (
    <Layout>
      <Container>
        <Grid marginTop={10}>
          <Grid item marginBottom={2}>
            <SelectFavManager
              setData={setDataFromSelect}
              updateConfirmation={dataUpdateIndicator}
              setConditionalIndex={setConditionalIndex}
            />
          </Grid>
          <Grid item>
            {/*{!!data ? (*/}
            {/*  <FavoritesTable data={data.data} />*/}
            {/*) : (*/}
            {/*  <p>Cargando Favoritos ...</p>*/}
            {/*)}*/}
            {!!dataToTable ? (
              <FavoritesTable
                data={dataToTable}
                requestUpdate={requestUpdate}
                selectedItemIndex={selectItemIndicator}
              />
            ) : (
              <p>Cargando Favoritos ...</p>
            )}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default withAuth(Favorites);
