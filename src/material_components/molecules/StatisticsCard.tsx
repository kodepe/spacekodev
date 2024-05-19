import { TailwindBaseProps } from "@/material_components/types/base";
import { SKCard } from "../atoms/Card";
import { SKCardHeader } from "../atoms/CardHeader";
import { SKCardBody } from "../atoms/CardBody";
import { SKCardFooter } from "../atoms/CardFooter";
import { SKTypography } from "../atoms/Typography";

interface Props extends TailwindBaseProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  value?: React.ReactNode;
  footer?: React.ReactNode;
}

export const SKStatisticsCard = ({ icon, title, value, footer }: Props) => {
  return (
    <SKCard className="border border-blue-gray-100 shadow-sm">
      <SKCardHeader
        variant="gradient"
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"
      >
        {icon}
      </SKCardHeader>
      <SKCardBody className="p-4 text-right">
        <SKTypography
          variant="small"
          className="font-normal text-blue-gray-600"
        >
          {title}
        </SKTypography>
        <SKTypography variant="h4" color="blue-gray">
          {value}
        </SKTypography>
      </SKCardBody>
      {footer && (
        <SKCardFooter className="border-t border-blue-gray-50 p-4">
          {footer}
        </SKCardFooter>
      )}
    </SKCard>
  );
};
