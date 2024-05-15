import { colors } from "@/constants/colors";
import { JumbotromProps } from "./types";
import { Typography } from "@/constants/typography";
import Button from "../button";

const Jumbotron = ({
  title = "",
  description = "",
  btnText = "",
  className,
  classNameContent,
  onClick,
}: JumbotromProps) => {
  return (
    <div className={`${className} relative z-0`}>
      <div className="absolute inset-0 bg-[#000] opacity-60 z-10"></div>
      <div className={`${classNameContent} z-20`}>
        <h1 className={`${Typography.latoBold} text-4xl leading-[50px] mb-4`}>
          {title}
        </h1>
        <p className={`${Typography.latoLight} text-base mt-6 mb-8 `}>
          {description}
        </p>
        <Button
          onClick={onClick}
          variant="primary"
          className="max-w-[320px]"
          text={btnText}
        />
      </div>
    </div>
  );
};
export default Jumbotron;
