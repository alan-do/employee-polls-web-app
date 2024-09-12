const Question = ({question}) => {
  return (
    <div className="question">
      <h1 className="text-2xl font-bold">{question.author}</h1>
      <p className="text-gray-500">{question.timestamp}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Show</button>
    </div>
  );
};

export default Question;