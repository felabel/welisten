import { useState } from "react";
import SuggestionCard from "../suggestion/SuggestionCard";
import EmptyState from "../empty/EmptyState";
import { useGetFeedbackQuery } from "../../services/protectedApi";
const Content = () => {
  const [empty] = useState(false);

  const feedbackQueryResult = useGetFeedbackQuery();
  const feedbacks = feedbackQueryResult.data?.feedbacks;

  return (
    <div>
      {empty ? (
        <EmptyState />
      ) : (
        feedbacks?.map((suggestion) => (
          <SuggestionCard key={suggestion.id} {...suggestion} />
        ))
      )}
    </div>
  );
};

export default Content;
