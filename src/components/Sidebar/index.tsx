import { classNames } from "@/utils/classNames";
import { useState } from "react";
import styles from "./index.module.css";
import { MenuIcon } from "../Icons/menu";
const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        "bg-primary relative",
        styles.sideBarContainer,
        isExpanded ? styles.sidebarShow : styles.sidebarHide
      )}
    >
      <div
        className={classNames(
          "flex w-full flex-row h-20 px-8 py-4 text-center"
        )}
      >
        <div
          onClick={handleToggleSidebar}
          className={classNames(
            isExpanded ? styles.showItem : styles.hideItem,
            "cursor-pointer text-light flex items-center justify-center flex-1"
          )}
        >
          {"App Name"}
        </div>
        {/* <MenuIcon onClick={handleToggleSidebar} /> */}
      </div>
      <div className="relative w-full flex flex-col flex-1">
        <div
          className={classNames(
            isExpanded ? styles.linkShow : styles.linkHide,
            "px-4",
            isExpanded ? "text-left" : "text-center"
          )}
        >
          {isExpanded ? "Usuarios" : "Usuarios"[0]}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
