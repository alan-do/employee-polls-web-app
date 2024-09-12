import Question from '../common/Question';

const DashBoard = ({newQuestions = [], doneQuestions = []}) => {
  console.log('newQuestionsDashBoard', newQuestions);
  console.log('doneQuestionsDashBoard', doneQuestions);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ">New Question</h1>
      <div>
          {newQuestions.length > 0 ? (
            newQuestions.map((question) => (
              <Question key={question.id} question={question} />
            ))
          ) : (
            <p className="text-gray-500">No new questions available.</p>
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
