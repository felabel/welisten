import styles from "./replies.module.scss";

const Replies = ({ replies }: { replies: any }) => {
  return (
    <div className={styles.container}>
      {replies.map((reply: any, index: any) => (
        <div key={index} className={styles.reply}>
          <img src={reply.avatar} alt={reply.name} className={styles.avatar} />
          <div className={styles.content}>
            <h4 className={styles.commentAuthor}>{reply.name}</h4>
            <span className={styles.username}>@hexagon.bestagon</span>
            <p className={styles.text}>{reply.text}</p>
            <div className={styles.actions}>
              <button className={styles.post_reply}>Post Reply</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Replies;
