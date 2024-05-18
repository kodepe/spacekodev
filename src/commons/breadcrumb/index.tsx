import Link from "next/link";
import { BreadcrumbsItemProps, BreadcrumbsProps } from "./types";

const Breadcrumb = ({ items }: BreadcrumbsProps) => {
  const buildItems = () => {
    return items
      ?.map((value) => value.title)
      ?.join("$%#/$%#")
      .split("$%#");
  };
  return (
    <div className="flex flex-row gap-2 mb-4">
      {buildItems()?.map((value, index) => {
        return (
          <div
            key={value}
            className={`font-[300] text-base text-dark capitalize ${
              value === "/"
                ? "text-dark"
                : "hover:opacity-80 transition-all cursor-pointer"
            } `}
          >
            <Link
              className={`${
                index === items.length
                  ? "hover:font-[400] transition-all"
                  : "text-dark opacity-50"
              }`}
              href={items.find((v) => v.title === value)?.href ?? "/"}
            >
              {value}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Breadcrumb;
