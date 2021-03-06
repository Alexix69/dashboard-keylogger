import { Alert, Container, Grid, Skeleton } from "@mui/material";
import Layout from "../../components/Layout";
import ReportsTable from "../../components/ReportsTable";
import { Input } from "antd";
import { useEffect, useState } from "react";
import Report from "../../api/report";
import useSWR from "swr";
import withAuth from "../../hocs/withAuth";
import api from "../../api";
import SearchInput from "../../components/SearchInput";
import Head from "next/head";
import * as React from "react";
import styled from "styled-components";
import ProgressCircleReports from "../../components/ProgressCircleReports";
import Button from "@mui/material/Button";

const Reports = () => {
  const [matchingReports, setMatchingReports] = useState([]);
  const [indexToShow, setIndexToShow] = useState([]);
  const [data, setData] = useState(null);
  const [confirmRefreshButton, setConfirmRefreshButton] = useState(false);
  const [requestUpdate, setRequestUpdate] = useState(false);
  const [renderCircleProgress, setRenderCircleProgress] = useState(false);
  // const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    // if (!!confirmRefreshButton) {
    setRenderCircleProgress(true);
    console.log("EMPIEZA REFRESH");
    getRecords().then(() => {
      console.log("TERMINA CONSULTA GET RECORDS");
      setRenderCircleProgress(false);
    });
    // }
  }, [confirmRefreshButton, requestUpdate]);

  // useEffect(() => {
  //   getRecords();
  // }, [requestUpdate]);

  const confirmRequestUpdate = () => {
    setRequestUpdate((prevState) => !prevState);
  };

  const setConfirmationButton = () => {
    setConfirmRefreshButton((prevState) => !prevState);
  };

  const getRecords = async () => {
    try {
      const response = await Report.all();
      console.log("records", response.data);
      setData(response.data);
    } catch (e) {
      console.log("Error at get records");
    }
  };

  const setFound = (reports) => {
    setMatchingReports(reports);
  };

  const setToShow = (array) => {
    setIndexToShow(array);
  };

  useEffect(() => {
    console.log("MATCHING REPORTS IN REPOTES", matchingReports);
  }, [matchingReports]);
  // const [input, setInput] = useState("");
  // const [reports, setReports] = useState([]);
  // const [search, setSearch] = useState([]);
  // const [indexToShow, setIndexToShow] = useState([]);

  // DESCOMENTAR ABAJO
  /*
  const fetcher = (url) => fetch(url).then((res) => res.json());
  // const fetcher = (url) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/records`,
    fetcher,
    {
      refreshInterval: 50000,
    }
  );
*/
  // HASTA AQU??

  // useEffect(() => {
  //   //getData();
  //   //setInput(search);
  //
  //   // return () => {
  //   //   setSearch("");
  //   // };
  //
  //   console.log("SETSEARCH", search);
  // }, [search]);

  // useEffect(() => {
  //   if (!!reports && input.length > 3) {
  //     const indexKeystrokes = [];
  //     reports.forEach((report, index) => {
  //       if (report.type === "keystroke") {
  //         if (report.content.indexOf(input.toLowerCase()) > -1) {
  //           indexKeystrokes.push(index);
  //         }
  //       }
  //     });
  //     setIndexToShow(indexKeystrokes);
  //     // setSearch("");
  //   } else {
  //     console.log("Palabras v??lidas a partir de 4 caracteres");
  //   }
  //   return () => {
  //     setInput("");
  //   };
  // }, [input]);
  //
  // const getData = async () => {
  //   try {
  //     const response = await Report.all();
  //     setReports(response.data);
  //   } catch (e) {
  //     console.log("ERROr", e);
  //   }
  // };

  return (
    <>
      <Head>
        <title>Todos los registros</title>
      </Head>

      <Layout>
        <Container>
          <Grid marginTop={9}>
            {/*<Input*/}
            {/*  placeholder="Ingrese una palabra"*/}
            {/*  onPressEnter={(e) =>*/}
            {/*    setSearch((prevState) => {*/}
            {/*      return [e.target.value];*/}
            {/*    })*/}
            {/*  }*/}
            {/*/>*/}

            <Grid item marginBottom={2}>
              <SearchInput
                setConfirmationButton={setConfirmationButton}
                setReports={setFound}
                matchingReports={matchingReports}
                setIndexToShow={setToShow}
                renderCircleProgress={renderCircleProgress}
              />
              {/*<LoadingReportsSpinner />*/}
              {/*<AuxSpinner />*/}
            </Grid>

            <Grid item>
              {/*{!!data ? (*/}
              {!!data ? (
                <ReportsTable
                  // indexToShow={search}
                  confirmRequestUpdate={confirmRequestUpdate}
                  indexToShow={!!indexToShow.length > 0 ? indexToShow : []}
                  data={
                    matchingReports.length > 0 ? matchingReports : data.data
                  }
                  totalRecords={data.all_records}
                />
              ) : (
                // ) : !!matchingReports ? (
                //   <ReportsTable
                //     // indexToShow={search}
                //     data={matchingReports}
                //     // totalRecords={data.all_records}
                //   />
                // <p> Cargando datos ...</p>
                <>
                  {/*<ProgressCircleReports />*/}
                  <Skeleton
                    variant="rectangular"
                    width={1140}
                    height={600}
                    // animation="wave"
                  />
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default withAuth(Reports);

const StyledProgressCircleReports = styled(ProgressCircleReports)`
  position: absolute;

  left: 500px;
  z-index: 500;
`;

const StyledReportsTable = styled(ReportsTable)`
  position: relative;
  z-index: 100;
`;
