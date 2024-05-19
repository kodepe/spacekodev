import { TailwindBaseProps } from "@/material_components/types/base";
import { Button } from "@material-tailwind/react";
import {
  variant,
  color,
  fullWidth,
  loading,
  ripple,
  size,
  className,
} from "@material-tailwind/react/types/components/button";

interface Props extends TailwindBaseProps {
  variant?: variant;
  color?: color;
  className?: className;
  fullWidth?: fullWidth;
  loading?: loading;
  ripple?: ripple;
  size?: size;
}

export const SKButton = ({
  variant,
  color,
  children,
  className,
  fullWidth,
  loading,
  ripple,
  size,
}: Props) => {
  return (
    <Button
      placeholder={"Button"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      variant={variant}
      color={color}
      className={className}
      fullWidth={fullWidth}
      loading={loading}
      size={size}
      ripple={ripple}
    >
      {children}
    </Button>
  );
};
