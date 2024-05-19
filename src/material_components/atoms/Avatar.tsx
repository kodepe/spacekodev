import { Avatar } from "@material-tailwind/react";
import {
  size,
  variant,
  className,
} from "@material-tailwind/react/types/components/avatar";

interface Props {
  src?: string | undefined;
  alt?: string | undefined;
  size?: size;
  variant?: variant;
  className?: className;
}
export const SKAvatar = ({ src, alt, size, variant, className }: Props) => {
  return (
    <Avatar
      src={src}
      alt={alt}
      size={size}
      variant={variant}
      className={className}
      placeholder={"Avatar"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    />
  );
};
