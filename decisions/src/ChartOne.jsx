import React from "react";
import ReactEcharts from "echarts-for-react";

function ChartOne() {


  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Xxx"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [1, 2, 3, 3, 4, 1, 2, 3],
        type: "bar",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default ChartOne;
