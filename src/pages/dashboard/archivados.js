import React from "react";
import { Container, Grid } from "@mui/material";
import Layout from "../../components/Layout";
import ArchivedTable from "../../components/ArchivedTable";
import useSWR from "swr";
import withAuth from "../../hocs/withAuth";

const Archived = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/records/archived`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  if (data === null) {
    console.log("CARGANDO DATOS");
  }
  return (
    <Layout>
      <Container>
        <Grid marginTop={10}>
          {!!data ? (
            <ArchivedTable data={data.data} />
          ) : (
            <p>Cargando Archivados ...</p>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export default withAuth(Archived);
