import { TailwindBaseProps } from "@/material_components/types/base";
import { IconButton } from "@material-tailwind/react";
import {
  size,
  variant,
  color,
  ripple,
  className,
} from "@material-tailwind/react/types/components/button";

interface Props extends TailwindBaseProps {
  variant?: variant;
  size?: size;
  color?: color;
  ripple?: ripple;
  className?: className;
  fullWidth?: boolean;
}

export const SKIconButton = ({
  children,
  onClick,
  size,
  variant,
  color,
}: Props) => {
  return (
    <IconButton
      placeholder={"IconButton"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      size={size}
      onClick={onClick}
      variant={variant}
      color={color}
    >
      {children}
    </IconButton>
  );
};
