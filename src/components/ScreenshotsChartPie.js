import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Skeleton } from "@mui/material";

const ScreenshotsChartPie = ({ clients, colors, borderColors }) => {
  const labels = [];
  const nmbOfScreenshots = [];
  if (!!clients) {
    clients.forEach((client) => {
      labels.push(client.nickname);
      nmbOfScreenshots.push(client.screenshots);
    });
  }

  // const getRandomNumber = (first, last) => {
  //   const numOfPosibilities = last - first;
  //   let randomNmb = Math.random() * numOfPosibilities;
  //   randomNmb = Math.floor(randomNmb);
  //   return parseInt(first) + randomNmb;
  // };
  //
  // const getRandomColor = () => {
  //   const hexadecimalValues = [
  //     "0",
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //     "5",
  //     "6",
  //     "7",
  //     "8",
  //     "9",
  //     "A",
  //     "B",
  //     "C",
  //     "D",
  //     "E",
  //     "F",
  //   ];
  //   let randomColor = "#";
  //   for (let i = 0; i < 6; i++) {
  //     let index = getRandomNumber(0, hexadecimalValues.length);
  //     randomColor += hexadecimalValues[index];
  //   }
  //   return randomColor;
  // };
  //
  // const colors = [];
  // const borderColors = [];
  // for (let i = 0; i < labels.length; i++) {
  //   colors.push(getRandomColor());
  //   borderColors.push(`${colors[i]}A6`);
  // }

  const data = {
    labels: labels,
    datasets: [
      {
        data: nmbOfScreenshots,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 2.5,
      },
    ],
  };
  return (
    <div>
      {!!clients ? (
        <Pie data={data} />
      ) : (
        // <p>Cargando ...</p>
        <Skeleton
          variant="circular"
          width={175}
          height={175}
          // animation="wave"
        />
      )}
    </div>
  );
};

export default ScreenshotsChartPie;
