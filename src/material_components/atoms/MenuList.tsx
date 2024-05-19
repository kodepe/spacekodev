import { TailwindBaseProps } from "@/material_components/types/base";
import { MenuItem, MenuList } from "@material-tailwind/react";
import { className } from "@material-tailwind/react/types/components/menu";
import { MouseEventHandler } from "react";

interface Option {
  element?: React.ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler;
}
interface Props extends TailwindBaseProps {
  className?: className;
  dismissible?: boolean;
  options?: Option[];
}
export const SKMenuList = ({ className, dismissible, options = [] }: Props) => {
  return (
    <MenuList
      placeholder={"MenuList"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      className={className}
      dismissible={dismissible}
    >
      {options.map((value: any, index) => {
        return (
          <MenuItem
            placeholder={"MenuItem"}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            key={`menu-${index}`}
            className={className}
            disabled={value?.disabled}
            onClick={value?.onClick}
          >
            {value?.element}
          </MenuItem>
        );
      })}
    </MenuList>
  );
};
