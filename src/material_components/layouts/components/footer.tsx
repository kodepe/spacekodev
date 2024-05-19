import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { SKTypography } from "@/material_components/atoms/Typography";

interface Props {
  brandName?: string;
  brandLink?: string;
  routes?: any[];
}

export function Footer({ brandName, brandLink, routes = [] }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-center">
        <SKTypography variant="small" className="font-normal text-inherit">
          &copy; {year}, made with{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5 text-red-600" />
          {"by "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {brandName}
          </a>
          {"for a better web."}
        </SKTypography>
      </div>
    </footer>
  );
}

export default Footer;
