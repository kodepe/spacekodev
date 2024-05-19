"use client";
import { TailwindBaseProps } from "@/material_components/types/base";
import { SKCard } from "../atoms/Card";
import { SKCardHeader } from "../atoms/CardHeader";
import Chart from "react-apexcharts";
import { SKCardBody } from "../atoms/CardBody";
import { SKTypography } from "../atoms/Typography";
import { SKCardFooter } from "../atoms/CardFooter";

interface Props extends TailwindBaseProps {
  chart: Object;
  title: string;
  description: string;
  footer: React.ReactNode;
}

export const SKStatisticsChart = ({
  chart,
  title,
  description,
  footer,
}: Props) => {
  return (
    <SKCard>
      <SKCardHeader variant="gradient" floated={false} shadow={false}>
        {window && <Chart {...chart} />}
      </SKCardHeader>
      <SKCardBody className="px-6 pt-0">
        <SKTypography variant="h6">{title}</SKTypography>
        <SKTypography
          variant="small"
          className="font-normal text-blue-gray-600"
        >
          {description}
        </SKTypography>
      </SKCardBody>
      {footer && (
        <SKCardFooter className="border-t border-blue-gray-50 px-6 py-5">
          {footer}
        </SKCardFooter>
      )}
    </SKCard>
  );
};
