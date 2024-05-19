import { TailwindBaseProps } from "@/material_components/types/base";
import { Card, CardBody } from "@material-tailwind/react";
import { className } from "@material-tailwind/react/types/components/card";
interface Props extends TailwindBaseProps {
  className?: className;
}
export const SKCardBody = ({ children, className, onClick }: Props) => {
  return (
    <CardBody
      placeholder={"Cardbody"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      className={className}
      onClick={onClick}
    >
      {children}
    </CardBody>
  );
};
