import Badge from "@/components/Badge";
import { RecentShipmentData } from "@/constants";
import { Status } from "@/utils";
import { Button, Select, Space, Table } from "antd";
import { Content } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const RecentShipment = () => {
  const statusOptions = ["All", "Pending", "In Transit", "Delivered"];

  const [filteredStatus, setFilteredStatus] = useState("All");

  const [filteredData, setFilteredData] = useState(RecentShipmentData);

  const columns: ColumnsType<any> = React.useMemo(() => {
    return [
      {
        key: "s_n",
        title: "S/N",
        dataIndex: "s_n",
      },
      {
        key: "shipment_no",
        title: "Shipment No",
        dataIndex: "shipment_no",
      },

      {
        key: "destination",
        title: "Destination",
        dataIndex: "destination",
      },
      {
        key: "description",
        title: "Description",
        dataIndex: "description",
      },

      {
        key: "status",
        title: "Status",
        dataIndex: "status",
        render: (text: Status) => <Badge className="" status={text} />,
      },
      {
        key: "date",
        title: "Date",
        dataIndex: "date",
      },

      {
        title: "Action",
        key: "action",
        align: "center",
        render: () => (
          <Space size="middle">
            <Button className="border-none">
              <Space>
                <MoreHorizontalCircle01Icon size="20" color="#5C4D58" />
              </Space>
            </Button>
          </Space>
        ),
      },
    ];
  }, []);

  useEffect(() => {
    if (filteredStatus === "All") {
      setFilteredData(RecentShipmentData);
    } else {
      setFilteredData(
        RecentShipmentData.filter((item) => item.status === filteredStatus)
      );
    }
  }, [filteredStatus]);

  return (
    <div className="md:flex-[2] flex-1   md:order-1 order-2">
      <div className="flex gap-3 items-center">
        <p className="text-secondary-200 text-base font-medium">
          Recent Shipments
        </p>

        <div className="">
          <Select
            value={filteredStatus}
            onChange={setFilteredStatus}
            className="w-52"
          >
            {statusOptions.map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <TableWrapper>
        <Table
          className="overflow-scroll mt-6 no-scrollbar whitespace-nowrap"
          columns={columns}
          dataSource={filteredData}
          pagination={false}
        />
      </TableWrapper>
    </div>
  );
};

export const TableWrapper = styled(Content)`
  ${tw`bg-transparent   rounded-md text-[#1F0E1C]`}
`;

export default RecentShipment;
