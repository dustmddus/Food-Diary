import { ResponsivePie } from "@nivo/pie";

interface PieData {
  id: string;
  label: string;
  value: number;
}

interface Props {
  data: PieData[];
}

const PieChart = ({ data }: Props) => (
  <ResponsivePie
    data={data}
    colors={["#62d2a2", "#FDCF65", "#F19A78"]}
    margin={{ top: 50, right: 700, bottom: 20, left: 200 }}
    innerRadius={0.5}
    padAngle={4}
    cornerRadius={4}
    activeOuterRadiusOffset={8}
    borderWidth={2}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    theme={{
      legends: {
        text: {
          fontSize: 18,
          fill: "#000000",
        },
      },
    }}
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 130,
        translateY: 0,
        itemsSpacing: 16,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#000",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default PieChart;
