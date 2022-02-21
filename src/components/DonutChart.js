import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DonutChart = ({ clients, colors }) => {
  const labels = [];
  const nmbOfRecords = [];
  if (!!clients) {
    clients.forEach((client) => {
      labels.push(client.nickname);
      nmbOfRecords.push(client.total_records);
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
  // for (let i = 0; i < labels.length; i++) {
  //   colors.push(getRandomColor());
  // }

  const data = {
    labels: labels,
    datasets: [
      {
        data: nmbOfRecords,
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>{!!clients ? <Doughnut data={data} /> : <p>Cargando ...</p>}</div>
  );
};

export default DonutChart;
