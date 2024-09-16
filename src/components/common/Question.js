const Question = ({question}) => {
  console.log(typeof question);
  return (
    <div className="border-2 border-red-500 rounded-md p-4">
      <h1 className="text-2xl font-bold">{question.author}</h1>
      <p className="text-gray-500">{new Date(question.timestamp).toLocaleString()}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Show</button>
    </div>
  );
};

export default Question;