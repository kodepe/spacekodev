import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenSidenav,
} from "@/material_components/context/MaterialTailwind";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SKTypography } from "@/material_components/atoms/Typography";
import { SKButton } from "@/material_components/atoms/button";

export type sidenavTapsProps = {
  dark: string;
  white: string;
  transparent: string;
};
export type sidenavTapsType = "dark" | "white" | "transparent";

export interface SideNavProps {
  brandImg?: string;
  brandName?: string;
  routes: any[];
}

export const SKSidenav = ({ brandName, routes }: SideNavProps) => {
  const router = usePathname();
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes: any = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };
  console.log(openSidenav);
  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-gray-200`}
    >
      <div className={`relative`}>
        <Link href="/" className="py-6 px-8 text-center">
          <SKTypography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </SKTypography>
        </Link>
        <IconButton
          placeholder={"IconButton"}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="text"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden text-[#000]"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon
            strokeWidth={2.5}
            className="h-5 w-5 text-[#000]"
            color="#000"
          />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <SKTypography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </SKTypography>
              </li>
            )}
            {pages.map(({ icon, name, path }: any) => (
              <li key={name}>
                <Link href={`/${layout}${path}`}>
                  <SKButton
                    variant={
                      router === `/${layout}${path}` ? "gradient" : "text"
                    }
                    color={
                      router === `/${layout}${path}`
                        ? sidenavColor
                        : sidenavType === "dark"
                        ? "white"
                        : "blue-gray"
                    }
                    className="flex items-center gap-4 px-4 capitalize"
                    fullWidth
                  >
                    {icon}
                    <SKTypography
                      color="inherit"
                      className="font-medium capitalize"
                    >
                      {name}
                    </SKTypography>
                  </SKButton>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
};
