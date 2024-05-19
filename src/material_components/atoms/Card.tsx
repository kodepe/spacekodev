import { TailwindBaseProps } from "@/material_components/types/base";
import { Card } from "@material-tailwind/react";
import { className } from "@material-tailwind/react/types/components/card";
import { MouseEventHandler } from "react";
interface Props extends TailwindBaseProps {
  className?: className;
  onClick?: MouseEventHandler;
}
export const SKCard = ({ children, className, onClick }: Props) => {
  return (
    <Card
      placeholder={"Card"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      className={className}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};
