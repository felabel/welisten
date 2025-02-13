import { useNavigate, useParams } from "react-router-dom";
import SuggestionCard from "../suggestion/SuggestionCard";
import styles from "./FeedbackDetails.module.scss";
import { repliesData, singleComment } from "../../data/suggestions";
import { FeedBackBtn, GoBackBtn } from "../shared/FeedBackBtn";
import Replies from "../Replies/Replies";
import { useGetFeedbackByIdQuery } from "../../services/protectedApi";

const FeedbackDetails = () => {
  const { id } = useParams();
  const feedbackId = id ?? ""; // Ensures it is always a string
  const singleFeedbackQueryResult = useGetFeedbackByIdQuery(feedbackId);
  const suggestion = singleFeedbackQueryResult.data?.feedback;

  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.btn_section}>
          <GoBackBtn stroke="#4661E6" textColor="#647196" />
          <FeedBackBtn
            text="Edit Feedback"
            customClick={() => {
              navigate(`/feedback/edit/${id}`);
            }}
          />
        </div>

        <SuggestionCard
          title={suggestion?.title}
          category={suggestion?.category}
          // upvotes={suggestion?.upvotes}
          // comments={suggestion?.comments}
          detail={suggestion?.detail}
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
