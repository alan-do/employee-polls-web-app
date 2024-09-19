import QuestionOption from "./components/QuestionOption";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PollDetails.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleVote } from "../../redux/actions/pollActions";

const PollDetails = () => {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const author = users[location.state.author];
  const user = useSelector((state) => state.auth.user);
  console.log('user', user);


  const onVote = (user, questionId, option) => {
    dispatch(handleVote(user, questionId, option));
    navigate(-1);
  };
  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <img
          src={"../../../assets/back-button.png"}
          alt="author"
          className="back-button-image"
        />
        Back
      </button>
      <div className="author-container">
        <h1 className="author-name">Poll by {author.name}</h1>
        <img src={author.avatarURL} alt="author" className="author-avatar" />
      </div>
      <div className="options-container">
        <QuestionOption
          option={location.state.optionOne}
          onVote={() => {
            console.log('onVote questionId', location.state.id);
            onVote(user.id, location.state.id, 'optionOne');
          }}
        />
        <QuestionOption
          option={location.state.optionTwo}
          onVote={() =>
            onVote(user.id, location.state.id, 'optionTwo')
          }
        />
      </div>
    </div>
  );
};

export default PollDetails;
