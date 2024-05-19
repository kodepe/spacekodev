import { Breadcrumbs } from "@material-tailwind/react";
import { className } from "@material-tailwind/react/types/components/breadcrumbs";
import Link from "next/link";
import { SKTypography } from "./Typography";

interface Props {
  className?: className;
  layout: string;
  page: string;
}

export const SKBreadcrumbs = ({ className, layout, page }: Props) => {
  return (
    <Breadcrumbs
      className={className}
      placeholder={"Breadcrumbs"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <Link href={`/${layout}`}>
        <SKTypography
          variant="small"
          color="blue-gray"
          className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
        >
          {layout}
        </SKTypography>
      </Link>
      <SKTypography variant="small" color="blue-gray" className="font-normal">
        {page}
      </SKTypography>
    </Breadcrumbs>
  );
};
