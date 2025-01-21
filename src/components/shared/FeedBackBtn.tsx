import { useNavigate } from "react-router-dom";
import styles from "./button.module.scss";
import TopArrowIcon from "../../assets/icons/TopArrowIcon";

export const FeedBackBtn = ({
  text,
  customClick,
}: {
  text: string;
  customClick?: () => void;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (customClick) {
      customClick(); // Call the custom function if provided
    } else {
      navigate("/feedback/create"); // Default navigation behavior
    }
  };

  return (
    <div>
      <button className={styles.addButton} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

type bntProps = {
  stroke?: string;
  textColor?: string;
};
export const GoBackBtn = ({ stroke, textColor }: bntProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.back_btn} onClick={() => navigate(-1)}>
      <span className={styles.icon}>
        <TopArrowIcon stroke={stroke || "#CDD2EE"} />
      </span>
      <span
        className={styles.text}
        style={textColor ? { color: textColor } : {}}
      >
        Go Back
      </span>
    </div>
  );
};
