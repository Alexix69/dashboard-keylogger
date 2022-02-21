import { Alert, Container, Grid } from "@mui/material";
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

const Reports = () => {
  const [matchingReports, setMatchingReports] = useState([]);
  const [indexToShow, setIndexToShow] = useState([]);

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

  const fetcher = (url) => fetch(url).then((res) => res.json());
  // const fetcher = (url) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/records`,
    fetcher
    // {
    //   refreshInterval: 30000,
    // }
  );

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
  //     console.log("Palabras válidas a partir de 4 caracteres");
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
                setReports={setFound}
                matchingReports={matchingReports}
                setIndexToShow={setToShow}
              />
            </Grid>

            <Grid item>
              {!!data ? (
                <ReportsTable
                  // indexToShow={search}
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
                <p> Cargando datos ...</p>
              )}
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default withAuth(Reports);
