import Question from "../Question/Question";
import "./DashBoard.css";
import { useNavigate } from "react-router-dom";

const DashBoard = ({ newQuestions = [], doneQuestions = [] }) => {
  const navigate = useNavigate();
  const onShowQuestion = (question) => {
    navigate(`/questions/${question.id}`, { state: question });
  };
  return (
    <div className="dashboard-container">
      <div className="question-area-container">
        <h1 className="home-title">New Question</h1>
        <div
        className="new-question-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {newQuestions.length > 0 ? (
          newQuestions.map((question) => (
            <Question
              key={question.id}
              question={question}
              onShowQuestion={onShowQuestion}
            />
          ))
        ) : (
          <p className="text-gray-500" style={{ gridColumn: "span 4" }}>
            No questions available.
          </p>
        )}
        </div>
      </div>
      <div className="question-area-container">
        <h1 className="home-title">Done Question</h1>
        <div
          className="new-question-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {doneQuestions.length > 0 ? (
          doneQuestions.map((question) => (
            <Question
              key={question.id}
              question={question}
              onShowQuestion={onShowQuestion}
            />
          ))
        ) : (
          <p className="text-gray-500" style={{ gridColumn: "span 4" }}>
            No questions available.
          </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
