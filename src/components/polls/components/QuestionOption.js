import './QuestionOption.css';

const QuestionOption = ({ option, onVote }) => {
    return <div className="option-container">
        <p className="option-text">{option.text}</p>
        <button className="button-option" onClick={onVote}>Vote</button>
    </div>;
};

export default QuestionOption;