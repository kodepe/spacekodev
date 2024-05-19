import React from "react";
import { SKTypography } from "../atoms/Typography";
import { SKCardBody } from "../atoms/CardBody";
import { SKCardHeader } from "../atoms/CardHeader";
import { SKCard } from "../atoms/Card";
import { EllipsisVerticalIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

interface Props {
  data: any[];
}

export const SKOrderOverview = ({ data }: Props) => {
  return (
    <SKCard className="border border-blue-gray-100 shadow-sm">
      <SKCardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 p-6"
      >
        <SKTypography variant="h6" className="mb-2">
          Orders Overview
        </SKTypography>
        <SKTypography
          variant="small"
          className="flex items-center gap-1 font-normal text-blue-gray-600"
        >
          <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" />
          <strong>24%</strong> this month
        </SKTypography>
      </SKCardHeader>
      <SKCardBody className="pt-0">
        {data.map(({ icon, color, title, description }, key) => (
          <div key={title} className="flex items-start gap-4 py-3">
            <div
              className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                key === data.length - 1 ? "after:h-0" : "after:h-4/6"
              }`}
            >
              {React.createElement(icon, {
                className: `!w-5 !h-5 ${color}`,
              })}
            </div>
            <div>
              <SKTypography variant="small" className="block font-medium">
                {title}
              </SKTypography>
              <SKTypography
                as="span"
                variant="small"
                className="text-xs font-medium text-blue-gray-500"
              >
                {description}
              </SKTypography>
            </div>
          </div>
        ))}
      </SKCardBody>
    </SKCard>
  );
};
