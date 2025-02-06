import { Button, Card } from "antd";

import { Add01Icon } from "hugeicons-react";
import Overview from "./component/overview";
import RecentShipment from "./component/RecentShipment";
import ShipmenCategory from "./component/ShipmentCategory";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { RecentShipmentData } from "@/constants";

Chart.register(...registerables);

const Dashboard = () => {
  const chartData = {
    labels: ["Pending", "In Transit", "Delivered"],
    datasets: [
      {
        label: "Shipments",
        data: [
          RecentShipmentData.filter((s) => s.status == "Pending").length,
          RecentShipmentData.filter((s) => s.status == "In Transit").length,
          RecentShipmentData.filter((s) => s.status == "Delivered").length,
        ],
        backgroundColor: ["#E6D8E3", "#975C89", "#AC7DA1"],
      },
    ],
  };

  return (
    <div className="">
      <div className="flex justify-end gap-4">
        <Button type="primary" size="large">
          <Add01Icon size={20} className="hidden md:block" color={"#FFFFFF"} />
          Create Shipment
        </Button>
      </div>

      <div>
        <Overview />
      </div>
      <div className="flex gap-2 w-full my-10">
        <Card className=" w-full">
          <Bar data={chartData} />
        </Card>
        <ShipmenCategory />{" "}
      </div>
      <div className="flex gap-8 md:flex-row flex-col mt-[62px]">
        <RecentShipment />
      </div>
    </div>
  );
};

// const ChartGrid = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   column-gap: 15px;
//   row-gap: 15px;
//   margin-top: 62px;

//   @media (max-width: 1100px) {
//     grid-template-columns: 1fr;

//     & > :nth-child(1) {
//       order: 2;
//     }
//     & > :nth-child(2) {
//       order: 1;
//     }
//   }
// `;

export default Dashboard;
