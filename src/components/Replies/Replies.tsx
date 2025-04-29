import { useState } from "react";
import styles from "./replies.module.scss";

const Replies = ({ replies }: { replies: any }) => {
  const [activeReplyId, setActiveReplyId] = useState<number | null>(null);

  const toggleReplyBox = (id: number, reply: any) => {
    console.log("Toggling reply for comment:", reply);
    setActiveReplyId(activeReplyId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      {replies?.map((reply: any, index: number) => (
        <div key={index}>
          <div className={styles.reply}>
            <img
              src={reply.avatar || "https://placehold.co/400"}
              alt={reply.name}
              className={styles.avatar}
            />
            <div className={styles.content}>
              <h4 className={styles.commentAuthor}>{reply.username}</h4>
              <span className={styles.username}>{reply.email}</span>
              <p className={styles.text}>{reply.text}</p>

              {activeReplyId === reply.id && (
                <form className={styles.replyBox}>
                  <textarea
                    className={styles.commentInput}
                    placeholder="Add your reply..."
                    maxLength={225}
                  />
                  <button type="submit" className={styles.submitButton}>
                    Submit
                  </button>
                </form>
              )}

              <div className={styles.actions}>
                <button
                  className={styles.post_reply}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent click
                    toggleReplyBox(reply.id, reply); // Pass the reply object
                  }}
                >
                  {activeReplyId === reply.id ? "Cancel" : "Post Reply"}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.line_wrapper}>
            {reply.replies?.map((nestedReply: any, i: number) => (
              <div key={i} className={styles.replies_wrapper}>
                <div className={styles.reply}>
                  <div className={styles.content}>
                    <h4 className={styles.commentAuthor}>
                      {nestedReply.username}
                    </h4>
                    <span className={styles.username}>{nestedReply.email}</span>
                    <p className={styles.text}>{nestedReply.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Replies;
