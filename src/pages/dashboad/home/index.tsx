
import React from "react";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import statisticsCardsData from "@/material_components/data/statistics-cards-data";
import statisticsChartsData from "@/material_components/data/statistics-charts-data";
import projectsTableData from "@/material_components/data/projects-table-data";
import ordersOverviewData from "@/material_components/data/orders-overview-data";
import { SKStatisticsCard } from "@/material_components/molecules/StatisticsCard";
import { SKTypography } from "@/material_components/atoms/Typography";
import { SKStatisticsChart } from "@/material_components/molecules/StatisticsChart";
import { SKOrderOverview } from "@/material_components/molecules/OrdersOverview";
import { SKAvatar } from "@/material_components/atoms/Avatar";
import { SKTables } from "@/material_components/atoms/Tables";
import { SKProgress } from "@/material_components/atoms/Progress";

export function DashboardHome() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <SKStatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <SKTypography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </SKTypography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <SKStatisticsChart
            key={props.title}
            {...props}
            footer={
              <SKTypography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon
                  strokeWidth={2}
                  className="h-4 w-4 text-blue-gray-400"
                />
                &nbsp;{props.footer}
              </SKTypography>
            }
          />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <SKTables
          headers={["companies", "members", "budget", "completion"]}
          data={
            <>
              {projectsTableData &&
                projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <SKAvatar src={img} alt={name} size="sm" />
                            <SKTypography variant="small" className="font-bold">
                              {name}
                            </SKTypography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }: any, key: number) => (
                            <SKAvatar
                              key={`${name}-${key}`}
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          ))}
                        </td>
                        <td className={className}>
                          <SKTypography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </SKTypography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <SKTypography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </SKTypography>
                            <SKProgress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
            </>
          }
          title={"Projects"}
          description={
            <>
              <CheckCircleIcon
                strokeWidth={3}
                className="h-4 w-4 text-blue-gray-200"
              />
              <strong>30 done</strong> this month
            </>
          }
        />
        <SKOrderOverview data={ordersOverviewData} />
      </div>
    </div>
  );
}

export default DashboardHome;
