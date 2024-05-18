import { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler | undefined;
}
export const MenuIcon = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} className="cursor-pointer transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.5"
        height="21.5"
        viewBox="0 0 25.5 21.5"
      >
        <g
          id="Group_464"
          data-name="Group 464"
          transform="translate(-359.25 -51.038)"
        >
          <path
            id="Path_26457"
            data-name="Path 26457"
            d="M-1049.384,51.788h-24"
            transform="translate(1433.384)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            id="Path_26458"
            data-name="Path 26458"
            d="M-1057.416,51.788h-15.968"
            transform="translate(1441.416 10)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            id="Path_26459"
            data-name="Path 26459"
            d="M-1049.384,51.788h-24"
            transform="translate(1433.384 20)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
};
