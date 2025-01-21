import { useState } from "react";
import SuggestionCard from "../suggestion/SuggestionCard";
import EmptyState from "../empty/EmptyState";
import { suggestions } from "../../data/suggestions";
const Content = () => {
  const [empty, setEmpty] = useState(false);

  return (
    <div>
      {empty ? (
        <EmptyState />
      ) : (
        suggestions.map((suggestion) => (
          <SuggestionCard key={suggestion.id} {...suggestion} />
        ))
      )}
    </div>
  );
};

export default Content;
