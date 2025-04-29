import React from "react";
import styles from "./comment.module.scss";

export type Props = {
  showModal: boolean;
  closeModal: () => void;
};
const CommentModal = ({ showModal, closeModal }: Props) => {
  if (!showModal) return null;
  return (
    <div>
      <h2>leave a comment</h2>
    </div>
  );
};

export default CommentModal;
