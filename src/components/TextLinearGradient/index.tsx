import styles from "./index.module.css";
interface Props {
  text: string;
}
const TextLinearGradient = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};
export default TextLinearGradient;
