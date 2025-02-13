import { useNavigate } from "react-router-dom";
import CommentIcon from "../../assets/icons/CommentIcon";
import TopArrowIcon from "../../assets/icons/TopArrowIcon";
import styles from "./SuggestionCard.module.scss";

const SuggestionCard = ({
  title,
  category,
  upvotes,
  comments,
  detail,
  id,
}: any) => {
  const navigave = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigave(`/feedback/${id}`)}>
      <div className={styles.upvotes}>
        <div>
          <TopArrowIcon />
        </div>
        {upvotes}
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p className={styles.content}>{detail}</p>
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.comment_wrapper}>
        <CommentIcon />
        <div className={styles.comments}>{comments}</div>
      </div>
    </div>
  );
};

export default SuggestionCard;
