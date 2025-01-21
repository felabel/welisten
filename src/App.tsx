import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import FeedbackDetails from "./components/comment-details/CommentDetails";
import FeedbackForm from "./components/Feedback-form/FeedbackForm";
import Roadmap from "./components/Roadmap/Roadmap";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/feedback/:id" element={<FeedbackDetails />} />
        <Route path="/feedback/create" element={<FeedbackForm />} />
        <Route path="/roadmap" element={<Roadmap />} />
        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
