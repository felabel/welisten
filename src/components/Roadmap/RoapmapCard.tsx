// RoadmapCard.tsx
import React from "react";
import styles from "./RoadmapCard.module.scss";
import TopArrowIcon from "../../assets/icons/TopArrowIcon";
import CommentIcon from "../../assets/icons/CommentIcon";

type RoadmapCardProps = {
  status: string;
  title: string;
  description: string;
  category: string;
  votes: number;
  comments: number;
};

// Map status to CSS classes
const statusClasses: { [key: string]: string } = {
  planned: styles.planned,
  "in progress": styles.inProgress,
  live: styles.live,
};

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  status,
  title,
  description,
  category,
  votes,
  comments,
}) => {
  const statusClass = statusClasses[status.toLowerCase()] || ""; // Default to an empty string if no match

  return (
    <div className={`${styles.card} ${statusClass}`}>
      <div className={styles.status}>
        <span className={styles.dot}></span> {status}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.category}>{category}</span>
      <div className={styles.footer}>
        <div className={styles.upvotes}>
          <div>
            <TopArrowIcon />
          </div>
          {votes}
        </div>
        <div className={styles.comment_wrapper}>
          <CommentIcon />
          <div className={styles.comments}>{comments}</div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
