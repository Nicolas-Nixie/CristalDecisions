import React from "react";
import ReactEcharts from "echarts-for-react";
import { consoParAn } from "./ExcelReader";

function ChartOne() {


  const option = {
    xAxis: {
      type: "category",
      data: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: consoParAn,
        type: "bar",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default ChartOne;
