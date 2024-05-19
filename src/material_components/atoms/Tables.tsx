import { Progress, Tooltip } from "@material-tailwind/react";
import { SKAvatar } from "./Avatar";
import { SKCardBody } from "./CardBody";
import { SKTypography } from "./Typography";
import { SKCard } from "./Card";
import { SKCardHeader } from "./CardHeader";
import { SKSeeMoreMenu } from "../molecules/SeeMoreMenu";

interface Props {
  title?: string;
  description?: React.ReactNode;
  headers: string[];
  data?: React.ReactNode;
}

export const SKTables = ({ title, description, headers, data }: Props) => {
  return (
    <SKCard className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
      <SKCardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6"
      >
        <div>
          <SKTypography variant="h6" className="mb-1">
            {title}
          </SKTypography>
          <SKTypography
            variant="small"
            className="flex items-center gap-1 font-normal text-blue-gray-600"
          >
            {description}
          </SKTypography>
        </div>
        <SKSeeMoreMenu
          options={[
            {
              element: "ab",
              onClick: () => console.log("random"),
              disabled: false,
            },
          ]}
        />
      </SKCardHeader>
      <SKCardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {headers.map((el) => (
                <th
                  key={el}
                  className="border-b border-blue-gray-50 py-3 px-6 text-left"
                >
                  <SKTypography
                    variant="small"
                    className="text-[11px] font-medium uppercase text-blue-gray-400"
                  >
                    {el}
                  </SKTypography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </SKCardBody>
    </SKCard>
  );
};
