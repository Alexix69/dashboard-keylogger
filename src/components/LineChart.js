import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import * as Utils from "../utils/utils";
// import {
//   CategoryScale,
//   Chart as ChartJS,
//   LinearScale,
//   Point,
//   PointElement,
// } from "chart.js";
//ChartJS.register(CategoryScale, LinearScale, PointElement);
const labels = Utils.months({ count: 7 });
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
