const DashBoard = (newQuestions = [], doneQuestions = []) => {
  return (
    <div>
      <h1>New Question</h1>
      <div>
          {newQuestions.length > 0 ? (
            newQuestions.map((question) => (
              <div key={question.id}>{question.text}</div>
            ))
          ) : (
            <p>No new questions available.</p>
          )}
        </div>
      <h1>Done Question</h1>
      <div>
          {doneQuestions.length > 0 ? (
            doneQuestions.map((question) => (
              <div key={question.id}>{question.text}</div>
            ))
          ) : (
            <p>No new questions available.</p>
          )}
        </div>
    </div>
  );
};

export default DashBoard;
