import styles from "./form.module.scss";
import { FeedBackBtn, GoBackBtn } from "../shared/FeedBackBtn";
import plus from "../../assets/plus.svg";
const FeedbackForm = () => {
  return (
    <div className={styles.feedbackFormContainer}>
      <GoBackBtn stroke="#4661E6" textColor="#647196" />
      <div className={styles.formWrapper}>
        <div className={styles.plusIconContainer}>
          <img src={plus} alt="Plus Icon" className={styles.plusIcon} />
        </div>
        <h1 className={styles.formTitle}>Create New Feedback</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="feedbackTitle" className={styles.label}>
              Feedback Title
            </label>
            <label htmlFor="feedbackTitle" className={styles.label_sm}>
              Add a short, descriptive headline
            </label>
            <input
              type="text"
              id="feedbackTitle"
              placeholder=""
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category" className={styles.label}>
              Category
            </label>
            <label htmlFor="feedbackTitle" className={styles.label_sm}>
              Choose a category for your feedback
            </label>
            <select id="category" className={styles.select}>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
              <option value="ui">UI</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="feedbackDetail" className={styles.label}>
              Feedback Detail
            </label>
            <label htmlFor="feedbackTitle" className={styles.label_sm}>
              Include any specific comments on what should be improved, added,
              etc.
            </label>
            <textarea
              id="feedbackDetail"
              placeholder="Include any specific comments on what should be improved, added, etc."
              className={styles.textarea}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <FeedBackBtn
              text="Add Feedback"
              customClick={() => alert("feedback submitted")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
