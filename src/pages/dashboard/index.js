import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import KeystrokesChartPie from "../../components/KeystrokesChartPie";
import ClientsTable from "../../components/ClientsTable";
import DonutChart from "../../components/DonutChart";
import useSWR from "swr";
import ScreenshotsChartPie from "../../components/ScreenshotsChartPie";
import WebsitesChartPie from "../../components/WebsitesChartPie";
import withAuth from "../../hocs/withAuth";
import Head from "next/head";

const Index = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  if (data === null) {
    console.log("CARGANDO DATOS");
  }

  const getRandomNumber = (first, last) => {
    const numOfPosibilities = last - first;
    let randomNmb = Math.random() * numOfPosibilities;
    randomNmb = Math.floor(randomNmb);
    return parseInt(first) + randomNmb;
  };

  const getRandomColor = () => {
    const hexadecimalValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      let index = getRandomNumber(0, hexadecimalValues.length);
      randomColor += hexadecimalValues[index];
    }
    return randomColor;
  };

  const colors = [];
  const borderColors = [];
  let total_records = 0;
  let total_keystrokes = 0;
  let total_screenshots = 0;
  let total_websites = 0;
  if (!!data) {
    for (let i = 0; i < data.length; i++) {
      colors.push(getRandomColor());
      borderColors.push(`${colors[i]}A6`);
    }

    data.forEach((client) => {
      total_records += parseInt(client.total_records);
      total_keystrokes += parseInt(client.keystrokes);
      total_screenshots += parseInt(client.screenshots);
      total_websites += parseInt(client.websites);
    });
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout>
        <Grid
          marginTop={10}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={4}
              sm={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid>
                {!!data ? (
                  <DonutChart clients={data} colors={colors} />
                ) : (
                  <p>Cargando...</p>
                )}
              </Grid>
              <Grid paddingY={1}>
                <Typography align="center">{`${total_records} Registros en total`}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sm={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid>
                <KeystrokesChartPie
                  clients={data}
                  colors={colors}
                  borderColors={borderColors}
                />
              </Grid>
              <Grid paddingY={1}>
                <Typography align="center">{`${total_keystrokes} Keystrokes`}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sm={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid>
                <ScreenshotsChartPie
                  clients={data}
                  colors={colors}
                  borderColors={borderColors}
                />
              </Grid>
              <Grid paddingY={1}>
                <Typography align="center">{`${total_screenshots} Screenshots`}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sm={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid>
                <WebsitesChartPie
                  clients={data}
                  colors={colors}
                  borderColors={borderColors}
                />
              </Grid>
              <Grid paddingY={1}>
                <Typography align="center">{`${total_websites} Websites`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} md={14} width={850} marginTop={3}>
            {!!data ? <ClientsTable data={data} /> : <p>Cargando datos ...</p>}
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

// export default Index;
export default withAuth(Index);

// export default function Home() {
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//
//   const { data, error } = useSWR(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`,
//     fetcher,
//     {
//       refreshInterval: 1000,
//     }
//   );
//
//   if (data === null) {
//     console.log("CARGANDO DATOS");
//   }
//
//   const getRandomNumber = (first, last) => {
//     const numOfPosibilities = last - first;
//     let randomNmb = Math.random() * numOfPosibilities;
//     randomNmb = Math.floor(randomNmb);
//     return parseInt(first) + randomNmb;
//   };
//
//   const getRandomColor = () => {
//     const hexadecimalValues = [
//       "0",
//       "1",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "A",
//       "B",
//       "C",
//       "D",
//       "E",
//       "F",
//     ];
//     let randomColor = "#";
//     for (let i = 0; i < 6; i++) {
//       let index = getRandomNumber(0, hexadecimalValues.length);
//       randomColor += hexadecimalValues[index];
//     }
//     return randomColor;
//   };
//
//   const colors = [];
//   const borderColors = [];
//   let total_records = 0;
//   let total_keystrokes = 0;
//   let total_screenshots = 0;
//   let total_websites = 0;
//   if (!!data) {
//     for (let i = 0; i < data.length; i++) {
//       colors.push(getRandomColor());
//       borderColors.push(`${colors[i]}A6`);
//     }
//
//     data.forEach((client) => {
//       total_records += parseInt(client.total_records);
//       total_keystrokes += parseInt(client.keystrokes);
//       total_screenshots += parseInt(client.screenshots);
//       total_websites += parseInt(client.websites);
//     });
//   }
//
//   return (
//     <Layout>
//       <Grid
//         marginTop={10}
//         container
//         direction="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Grid
//           container
//           direction="row"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
//             <Grid>
//               {!!data ? (
//                 <DonutChart clients={data} colors={colors} />
//               ) : (
//                 <p>Cargando...</p>
//               )}
//             </Grid>
//             <Grid paddingY={1}>
//               <Typography align="center">{`${total_records} Registros en total`}</Typography>
//             </Grid>
//           </Grid>
//           <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
//             <Grid>
//               <KeystrokesChartPie
//                 clients={data}
//                 colors={colors}
//                 borderColors={borderColors}
//               />
//             </Grid>
//             <Grid paddingY={1}>
//               <Typography align="center">{`${total_keystrokes} Keystrokes`}</Typography>
//             </Grid>
//           </Grid>
//           <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
//             <Grid>
//               <ScreenshotsChartPie
//                 clients={data}
//                 colors={colors}
//                 borderColors={borderColors}
//               />
//             </Grid>
//             <Grid paddingY={1}>
//               <Typography align="center">{`${total_screenshots} Screenshots`}</Typography>
//             </Grid>
//           </Grid>
//           <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
//             <Grid>
//               <WebsitesChartPie
//                 clients={data}
//                 colors={colors}
//                 borderColors={borderColors}
//               />
//             </Grid>
//             <Grid paddingY={1}>
//               <Typography align="center">{`${total_websites} Websites`}</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={8} md={14} width={850} marginTop={3}>
//           {!!data ? <ClientsTable data={data} /> : <p>Cargando datos ...</p>}
//         </Grid>
//       </Grid>
//     </Layout>
//   );
// }
