import "./Question.css";
const Question = ({question, onShowQuestion}) => {
  return (
    <div className="question-container">
      <h1 className="author">{question.author}</h1>
      <p className="timestamp">{new Date(question.timestamp).toLocaleString()}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => onShowQuestion(question)}>Show</button>
    </div>
  );
};

export default Question;