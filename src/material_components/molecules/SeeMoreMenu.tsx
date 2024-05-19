import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { SKMenu } from "../atoms/Menu";
import { SKMenuHandler } from "../atoms/MenuHandler";
import { SKMenuList } from "../atoms/MenuList";
import { TailwindBaseProps } from "@/material_components/types/base";
import { MouseEventHandler } from "react";

interface Option {
  element?: React.ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler;
}
interface Props extends TailwindBaseProps {
  options?: Option[];
}

export const SKSeeMoreMenu = ({ options }: Props) => {
  return (
    <SKMenu placement="left-start">
      <SKMenuHandler iconButton>
        <EllipsisVerticalIcon
          strokeWidth={3}
          fill="currenColor"
          className="h-6 w-6"
        />
      </SKMenuHandler>
      <SKMenuList dismissible options={options}></SKMenuList>
    </SKMenu>
  );
};
