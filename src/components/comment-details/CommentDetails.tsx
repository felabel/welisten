import { useParams } from "react-router-dom";
import SuggestionCard from "../suggestion/SuggestionCard";
import styles from "./FeedbackDetails.module.scss";
import {
  suggestions,
  repliesData,
  singleComment,
} from "../../data/suggestions";
import { FeedBackBtn, GoBackBtn } from "../shared/FeedBackBtn";
import Replies from "../Replies/Replies";
const FeedbackDetails = () => {
  const { id } = useParams();
  const feedbackId = Number(id); // Convert id to a number to match the array's data
  const suggestion = suggestions.find((item: any) => item.id === feedbackId);
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.btn_section}>
          <GoBackBtn stroke="#4661E6" textColor="#647196" />
          <FeedBackBtn text="Edit Feedback" />
        </div>

        <SuggestionCard
          title={suggestion?.title}
          category={suggestion?.category}
          upvotes={suggestion?.upvotes}
          comments={suggestion?.comments}
          content={suggestion?.content}
        />

        <div className={styles.commentsSection}>
          <h3>4 Comments</h3>
          <Replies replies={singleComment} />
          <div className={styles.replies_wrapper}>
            <div className={styles.replies_line}></div>
            <Replies replies={repliesData} />
          </div>
        </div>

        <form className={styles.addComment}>
          <textarea
            className={styles.commentInput}
            placeholder="Add your comment..."
            maxLength={225}
          />
          <div className={styles.commentFooter}>
            <span>225 characters left</span>
            <button className={styles.postComment}>Post Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackDetails;
