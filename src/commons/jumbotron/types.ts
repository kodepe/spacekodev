import { MouseEventHandler } from "react";

export interface JumbotromProps {
  title?: string;
  btnText?: string;
  description?: string;
  className?: string;
  classNameContent?: string;
  onClick?: MouseEventHandler | undefined;
}
