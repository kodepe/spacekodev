import { Input } from "@material-tailwind/react";
import {
  variant,
  size,
  color,
  label,
  error,
  success,
  icon,
  labelProps,
  containerProps,
  className,
  shrink,
} from "@material-tailwind/react/types/components/input";

interface Props {
  variant?: variant;
  size?: size;
  color?: color;
  label?: label;
  error?: error;
  success?: success;
  icon?: icon;
  labelProps?: labelProps;
  containerProps?: containerProps;
  className?: className;
  shrink?: shrink;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const SKInput = (props: Props) => {
  return (
    <Input
      crossOrigin={null}
      placeholder={"Input"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      {...props}
    />
  );
};
