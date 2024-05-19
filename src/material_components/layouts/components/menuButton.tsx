import {
  setOpenSidenav,
  useMaterialTailwindController,
} from "@/material_components/context/MaterialTailwind";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

export const MenuIconButton = () => {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  return (
    <IconButton
      placeholder={"IconButton"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      variant="text"
      color="blue-gray"
      className="grid xl:hidden"
      onClick={() => setOpenSidenav(dispatch, !openSidenav)}
    >
      <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
    </IconButton>
  );
};
