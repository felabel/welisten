import { useState } from "react";
import SuggestionCard from "../suggestion/SuggestionCard";
import EmptyState from "../empty/EmptyState";
import { useGetFeedbackQuery } from "../../services/protectedApi";
const Content = () => {
  const [empty] = useState(false);

  const feedbackQueryResult = useGetFeedbackQuery();
  const feedbacks = feedbackQueryResult.data?.feedbacks;

  console.log("feedbacks", feedbacks);
  return (
    <div>
      {empty ? (
        <EmptyState />
      ) : (
        feedbacks?.map((item, i) => (
          <div key={i}>
            <SuggestionCard
              id={item.id}
              title={item.title}
              detail={item.detail}
              upvotes={item.upvotes}
              comments={item.comments?.length}
              category={item.category}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
