import { Tabs, TabsProps } from "antd";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const items: TabsProps["items"] = [
  {
    key: "this_month",
    label: "This month",
  },
  {
    key: "this_year",
    label: "This year",
  },
];

const COLORS = ["#823C72", "#E6D8E3", "#975C89", "#AC7DA1"];

const pieChartData = [
  {
    name: "All Shipment",
    value: 10,
  },
  {
    name: "Shipments pending",
    value: 4,
  },
  {
    name: "Shipments in transit",
    value: 4,
  },
  {
    name: "Shipments delivered",
    value: 2,
  },
];

const ShipmenCategory = () => {
  const [currentForm, setCurrentForm] = React.useState("this_month");

  console.log(currentForm);

  const onChange = (key: string) => {
    setCurrentForm(key);
  };

  const getPercentage = (value: number, total: number) => {
    return ((value / total) * 100).toFixed(2) + "%";
  };

  // @ts-ignore
  const totalValue = pieChartData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="w-full">
      <div className="border-[1px] flex  flex-col items-center rounded-xl justify-center  p-4 border-[#e6e7e7]">
        <Tabs items={items} onChange={onChange} animated />
        <div className="grow-0 shrink h-[250px] w-full">
          <ResponsiveContainer>
            <PieChart onMouseEnter={() => {}}>
              <Tooltip
                formatter={(value) =>
                  `${value} (${getPercentage(value as number, totalValue)})`
                }
              />

              <Pie
                data={pieChartData}
                innerRadius={40}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {pieChartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className=" flex flex-col gap-9 w-full">
          {pieChartData.map((item, index) => (
            <div key={index} className="flex justify-between gap-2">
              <div className="flex gap-3 items-center justify-center">
                <span
                  style={{
                    backgroundColor: COLORS[index % COLORS.length],
                  }}
                  className={`w-[8px] h-[8px]  rounded-full   `}
                />
                <div className="text-[#535862]">{item.name}</div>
              </div>

              <div>{getPercentage(item.value, totalValue)}</div>
            </div>
          ))}
          <div className="flex justify-between">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmenCategory;
