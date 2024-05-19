import { TailwindBaseProps } from "@/material_components/types/base";
import { IconButton, MenuHandler } from "@material-tailwind/react";
interface Props extends TailwindBaseProps {
  iconButton?: boolean;
}
export const SKMenuHandler = ({ children, iconButton }: Props) => {
  return (
    <MenuHandler>
      {iconButton ? (
        <IconButton
          placeholder={"IconButton"}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          size="sm"
          variant="text"
          color="blue-gray"
        >
          {children}
        </IconButton>
      ) : (
        children
      )}
    </MenuHandler>
  );
};
