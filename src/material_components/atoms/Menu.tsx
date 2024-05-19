import { TailwindBaseProps } from "@/material_components/types/base";
import { Menu } from "@material-tailwind/react";
import {
  open,
  handler,
  placement,
  offset,
  dismiss,
  animate,
  lockScroll,
} from "@material-tailwind/react/types/components/menu";

interface Props extends TailwindBaseProps {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  lockScroll?: lockScroll;
  allowHover?: boolean;
}

export const SKMenu = ({
  children,
  placement,
  handler,
  offset,
  dismiss,
  animate,
  lockScroll,
  allowHover,
}: Props) => {
  return (
    <Menu
      placement={placement}
      handler={handler}
      offset={offset}
      dismiss={dismiss}
      animate={animate}
      lockScroll={lockScroll}
      allowHover={allowHover}
    >
      {children}
    </Menu>
  );
};
