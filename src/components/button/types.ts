import { colors } from "@/constants/colors";
import { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  disabled?: boolean | undefined;
  capitalize?: boolean | undefined;
  loading?: boolean | undefined;
  formTarget?: string | undefined;
  text?: React.ReactNode | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  variant?:
    | "primary"
    | "secondary"
    | "light"
    | "error"
    | "warning"
    | "outline"
    | "line"
    | "link";
  onClick?: MouseEventHandler | undefined;
  loadingProps?: LoadingIconProps;
}

export interface LoadingIconProps {
  size: string;
  color: string;
  variant:
    | "puff"
    | "ball-triangle"
    | "circles"
    | "audio"
    | "bars"
    | "rings"
    | "dots";
}

export default ButtonProps;
