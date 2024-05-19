import { TailwindBaseProps } from "@/material_components/types/base";
import { CardHeader } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/card";
import { variant } from "@material-tailwind/react/types/components/card";
import { className } from "@material-tailwind/react/types/components/card";
interface Props extends TailwindBaseProps {
  className?: className;
  variant?: variant;
  floated?: boolean;
  shadow?: boolean;
  color?: color;
}
export const SKCardHeader = ({
  children,
  className,
  onClick,
  variant,
  floated,
  shadow,
  color,
}: Props) => {
  return (
    <CardHeader
      placeholder={"CardHeader"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      className={className}
      onClick={onClick}
      variant={variant}
      floated={floated}
      shadow={shadow}
      color={color}
    >
      {children}
    </CardHeader>
  );
};
