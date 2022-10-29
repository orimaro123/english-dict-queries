import React from "react";
import { Chart } from "react-google-charts";
import storeInstance from "../store/store";

const dataSet = [
  [`${storeInstance.currentWord}`, "stats"],
  ["Ends With", storeInstance.endLetterCount()],
  ["Start with", storeInstance.startLetterCount()],
  ["Repeated in conjunction", storeInstance.repeatedLetterCount()],
  ["Appearance", storeInstance.timesIncludedCount()],
];

export const PieChart = () =>  (
    <Chart
      chartType="PieChart"
      data={dataSet}
      width={"300px"}
      height={"100px"}
      options={{
        title: `"${storeInstance.currentWord.toUpperCase()}" in a Pie chart`,
        backgroundColor: "#f8f8ff",
        fontSize: 11,
        chartArea: { width: 400, left: 5, top: 20, height: 110 },
        is3D: true,
      }}
    />
  );
