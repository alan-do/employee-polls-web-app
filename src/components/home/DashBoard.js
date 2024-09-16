import Question from '../common/Question';

const onShowQuestion = (question) => {
  console.log('question', question);
}

const DashBoard = ({newQuestions = [], doneQuestions = []}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New Question</h1>
      <div className="border">
          {newQuestions.length > 0 ? (
            newQuestions.map((question) => (
              <div key={question.id} className="flex-shrink-0 mr-4">
                <Question question={question} onShowQuestion={onShowQuestion}/>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Không có câu hỏi mới.</p>
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
