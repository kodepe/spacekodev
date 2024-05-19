import { TailwindBaseProps } from "@/material_components/types/base";
import { CardFooter } from "@material-tailwind/react";
import { className } from "@material-tailwind/react/types/components/card";
interface Props extends TailwindBaseProps {
  className?: className;
}
export const SKCardFooter = ({ children, className, onClick }: Props) => {
  return (
    <CardFooter
      placeholder={"CardFooter"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      className={className}
      onClick={onClick}
    >
      {children}
    </CardFooter>
  );
};
