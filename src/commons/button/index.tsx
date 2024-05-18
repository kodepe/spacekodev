import { colors } from "@/constants/colors";
import { LoadingIcon } from "./loading";
import ButtonProps, { LoadingIconProps } from "./types";
import ButtonVariants from "./variant";
import { FadeIn } from "../fadeIn";
import { Typography } from "@/constants/typography";

const defaultLoadingProps: LoadingIconProps = {
  color: colors.primary,
  size: "24",
  variant: "ball-triangle",
};

const Button = ({
  text,
  type,
  disabled,
  loading,
  variant = "primary",
  onClick,
  loadingProps = defaultLoadingProps,
  className = "",
  capitalize = false,
}: ButtonProps) => {
  const defaultClass =
    "text-md m-2 cursor-pointer transition-all items-center justify-center flex flex-row gap-2  py-2 px-4 rounded-md w-full h-[40px]";
  return (
    <button
      disabled={loading || disabled ? true : false}
      type={type}
      onClick={onClick}
      className={`${className} ${defaultClass} ${Typography.latoRegular} ${
        capitalize ? "uppercase" : ""
      } ${ButtonVariants[variant]}`}
    >
      {loading && (
        <FadeIn>
          <LoadingIcon
            size={loadingProps.size}
            color={loadingProps.color}
            variant={loadingProps.variant}
          />
        </FadeIn>
      )}
      {!loading && text && <FadeIn>{text}</FadeIn>}
    </button>
  );
};
export default Button;
