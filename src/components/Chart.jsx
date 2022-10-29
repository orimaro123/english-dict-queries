import React from "react";
import { Chart } from "react-google-charts";
import storeInstance from "../store/store";

const PieChart = () => {
  let endsWith = storeInstance.endLetterCount();
  let startWith = storeInstance.startLetterCount();
  let repeated = storeInstance.repeatedLetterCount();
  let appearance = storeInstance.timesIncludedCount();
  const data = [
    [`${storeInstance.currentWord}`, "stats"],
    ["Ends With", endsWith],
    ["Start with", startWith],
    ["Repeated in conjunction", repeated],
    ["Appearance", appearance],
  ];

  const options = {
    title: `"${storeInstance.currentWord.toUpperCase()}" in a Pie chart`,
    backgroundColor: "#f8f8ff",
    fontSize: 11,

    chartArea: { width: 400, left: 5, top: 20, height: 110 },
    is3D: true,
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"300px"}
        height={"100px"}
      />
    </>
  );
};

export default PieChart;
