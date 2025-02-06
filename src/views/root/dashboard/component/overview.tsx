import {
  PackageIcon,
  ShoppingBagCheckIcon,
  ShoppingBagRemoveIcon,
  TruckDeliveryIcon,
} from "hugeicons-react";
import tw, { styled } from "twin.macro";

interface StatusProps {
  val?: string | number;
  icon?: React.ReactNode;
  title: string;
  loading?: boolean;
  url: string;
}

const Overview = () => {
  return (
    <div>
      <Container className="mt-[30px]">
        <StatusContainer className="no-scrollbar">
          <OverViewCard
            val={"10"}
            icon={
              <IconWrapper className="bg-[#EDEFFF] border-[#6474DC] ">
                <PackageIcon
                  size={24}
                  color={"#4B5EDD"}
                  className="font-bold"
                />
              </IconWrapper>
            }
            title={"All Shipment"}
            url={""}
          />

          <OverViewCard
            val={"4"}
            icon={
              <IconWrapper className="bg-[#FFE1DF] border-[#D1473C]">
                <ShoppingBagRemoveIcon
                  size={24}
                  color={"#C9392E"}
                  className="font-bold"
                />
              </IconWrapper>
            }
            title={"Shipment pending"}
            url={""}
          />

          <OverViewCard
            val={"4"}
            icon={
              <IconWrapper className="bg-[#FEF7E3] border-[#D86E31]">
                <TruckDeliveryIcon
                  size={24}
                  color={"#CF6324"}
                  className="font-bold"
                />
              </IconWrapper>
            }
            title={"Shipment in transit"}
            url={""}
          />

          <OverViewCard
            val={"2"}
            icon={
              <IconWrapper className="bg-[#E1FFED] border-[#14A166]">
                <ShoppingBagCheckIcon
                  size={24}
                  color={"#1FA86F"}
                  className="font-bold"
                />
              </IconWrapper>
            }
            title={"Shipment delivered"}
            url={""}
          />
        </StatusContainer>
      </Container>
    </div>
  );
};

const OverViewCard: React.FC<StatusProps & { loading?: boolean }> = ({
  val,
  icon,
  title,
}: StatusProps) => {
  return (
    <OverviewContainer>
      <div className="flex justify-between">
        <p className="text-secondary-200">{title}</p>
        <div className="">{icon}</div>
      </div>
      <p className="text-xl font-medium">{val}</p>
    </OverviewContainer>
  );
};

const IconWrapper = styled.div`
  ${tw`rounded-[5px] border-[1px] p-[6px]`}
`;

const OverviewContainer = styled.div`
  ${tw`min-w-[240px] md:min-w-[280px] min-h-[110px] border-[1px] border-[#E6E7E7] cursor-pointer flex relative flex-col  p-4 gap-3  rounded-md bg-white  text-base `}
  .icon {
    ${tw`flex h-[45px] w-[45px] items-center justify-center rounded-full `}
  }
`;

export const Container = styled.section`
  ${tw`flex gap-2 overflow-auto`}
`;

export const StatusContainer = styled.div`
  ${tw`flex gap-5 overflow-scroll  w-[1255px]`}
`;

export default Overview;
