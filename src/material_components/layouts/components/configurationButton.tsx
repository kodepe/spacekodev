import {
  setOpenConfigurator,
  useMaterialTailwindController,
} from "@/material_components/context/MaterialTailwind";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

export const ConfigurationButton = () => {
  const [dispatch] = useMaterialTailwindController();
  return (
    <IconButton
      placeholder={"IconButton"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      size="lg"
      color="white"
      className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
      ripple={false}
      onClick={() => setOpenConfigurator(dispatch, true)}
    >
      <Cog6ToothIcon className="h-5 w-5" />
    </IconButton>
  );
};
