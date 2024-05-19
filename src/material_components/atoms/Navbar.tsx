import { TailwindBaseProps } from "@/material_components/types/base";
import { Navbar } from "@material-tailwind/react";
import {
  color,
  variant,
  shadow,
  blurred,
  fullWidth,
  className,
} from "@material-tailwind/react/types/components/navbar";

interface Props extends TailwindBaseProps {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  blurred?: blurred;
  fullWidth?: fullWidth;
  className?: className;
}

export const SKNavbar = ({
  variant,
  color,
  children,
  className,
  shadow,
  blurred,
  fullWidth,
}: Props) => {
  return (
    <Navbar
    placeholder={"NavBar"}
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
      color={color}
      className={className}
      fullWidth={fullWidth}
      blurred={blurred}
      shadow={shadow}
      variant={variant}
    >
      {children}
    </Navbar>
  );
};
