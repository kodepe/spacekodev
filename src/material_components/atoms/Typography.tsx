import { TailwindBaseProps } from "@/material_components/types/base";
import { Typography } from "@material-tailwind/react";
import {
  asType,
  variant,
  color,
} from "@material-tailwind/react/types/components/typography";
import { className } from "@material-tailwind/react/types/components/typography";

interface Props extends TailwindBaseProps {
  variant?: variant;
  className?: className;
  as?: asType;
  color?: color;
}

const SKTypography = ({ as, children, variant, className, color }: Props) => {
  return (
    <Typography
      placeholder={"Typography"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      as={as}
      className={className}
      variant={variant}
      color={color}
    >
      {children}
    </Typography>
  );
};

export { SKTypography };
