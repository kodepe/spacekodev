import { TailwindBaseProps } from "@/material_components/types/base";
import { MenuItem } from "@material-tailwind/react";
import {
  className,
  disabled,
} from "@material-tailwind/react/types/components/menu";

interface Props extends TailwindBaseProps {
  className?: className;
  disabled?: disabled;
}
export const SKMenuItem = ({ children, className, disabled }: Props) => {
  return (
    <MenuItem
      className={className}
      disabled={disabled}
      placeholder={"MenuItem"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      {children}
    </MenuItem>
  );
};
