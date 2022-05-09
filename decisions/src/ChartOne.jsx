import React from "react";
import ReactEcharts from "echarts-for-react";

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
        data: [1, 2, 3, 3, 4, 1, 2, 3, ],
        type: "bar",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default ChartOne;
