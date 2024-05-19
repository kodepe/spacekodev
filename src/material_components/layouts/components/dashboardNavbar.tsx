import {
  UserCircleIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  setOpenConfigurator,
  setOpenSidenav,
  useMaterialTailwindController,
} from "@/material_components/context/MaterialTailwind";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SKBreadcrumbs } from "@/material_components/atoms/Breadcrumbs";
import { SKInput } from "@/material_components/atoms/Input";
import { SKIconButton } from "@/material_components/atoms/IconButton";
import { SKNavbar } from "@/material_components/atoms/Navbar";
import { SKButton } from "@/material_components/atoms/button";
import { IconButton } from "@material-tailwind/react";
import { MenuIconButton } from "./menuButton";

export const SKDashboardNavbar = () => {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const pathname: any = usePathname();
  const [layout, page] = pathname.split("/").filter((el: string) => el !== "");

  return (
    <SKNavbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <SKBreadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
            layout={layout}
            page={page}
          />
        </div>
        <div className="flex items-center">
          <div className="mr-auto md:mr-4 md:w-56 flex flex-1">
            <SKInput label="Search" className="w-full flex flex-1" />
          </div>
          <MenuIconButton />
          <Link href="/auth/sign-in">
            <SKIconButton
              variant="text"
              color="blue-gray"
              className="grid lg:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </SKIconButton>
          </Link>
          <SKIconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </SKIconButton>
        </div>
      </div>
    </SKNavbar>
  );
};
