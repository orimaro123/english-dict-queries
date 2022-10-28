import { PieChart } from "react-minimal-pie-chart";
import { observer } from "mobx-react";
import storeInstance from "../../store/store";

const Chart = observer(() => {
  let endsWith = storeInstance.endLetterCount();
  let startWith = storeInstance.startLetterCount();
  let repeated = storeInstance.repeatedLetterCount();
  let appearance = storeInstance.timesIncludedCount();

  return (
    <div>
      <PieChart
        lengthAngle={-360}
        animate
        label={({ dataEntry }) => dataEntry.title}
        labelStyle={{
          fontSize: "5px",
          fontWeight: "bold",
        }}
        labelPosition={120}
        radius={20}
        data={[
          { title: "Starts with", value: startWith, color: "#88c580" },
          { title: "Ends with", value: endsWith, color: "#ffff9d" },
          { title: "Appearance", value: appearance, color: "#f7a258" },
          { title: "Repeated", value: repeated, color: "#de425b" },
        ]}
      />
    </div>
  );
});

export default Chart;
