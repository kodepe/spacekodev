import { Progress } from "@material-tailwind/react";
import {
  color,
  variant,
  className,
} from "@material-tailwind/react/types/components/progress";
interface Props {
  value?: number;
  variant?: variant;
  color?: color;
  className?: className;
}
export const SKProgress = ({ value, color, variant, className }: Props) => {
  return (
    <Progress
      placeholder={"Progress"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      value={value}
      variant={variant}
      color={color}
      className={className}
    />
  );
};
