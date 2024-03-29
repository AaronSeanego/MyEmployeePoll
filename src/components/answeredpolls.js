import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.css';
import {logIn} from '../actions/login';
import {handleLogin} from '../actions/login';
import { connect } from 'react-redux';
import './answeredpolls.css';
// import logo from "../logo.svg";
import { Link } from 'react-router-dom';
import { AiFillCheckSquare } from 'react-icons/ai';


const AnseredPolls = (props) => {
    const navigate = useNavigate();
    
    let sortedAnsweredQuestions = [];
    for(let i = 0; i < props.sortedQuestions.length; i++) {
        sortedAnsweredQuestions.push(props.questions[props.sortedQuestions[i]]);
    }

    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toDateString();
    }

    const navigateToPolls = (event) => {
        // navigate("/polls/id:" + id);
    }
    return (
        <div className="App">
            <div className="answered-polls-wrapper">
                <div className="answered-polls-container">
                        {
                            Object.values(sortedAnsweredQuestions).map((question) => 
                            (question.optionOne.votes.includes(props.authedUser) || question.optionTwo.votes.includes(props.authedUser)) && <div className="list-wrapper" key={question.id}>
                                <div className="list-contianer">
                                    {/* <img src={logo} alt="logo" width={40} height={40} style={{padding: "0px"}}/> */}
                                    <span className="question-author">{question.author}</span>
                                    {/* <span>{question}</span> */}
                                </div>
                                <div>
                                    <span className="question-date">{getDate(question.timestamp)}</span>
                                </div>
                                <hr/>
                                <div>
                                    <span className="question-text">
                                        <Link to={"/polls/" + question.id}>
                                            <button type="button" className="btn btn-show">Show</button>
                                        </Link>
                                    </span>
                                </div>

                                <div className="data-div">
                                    <div className="question-status">
                                        <span className="votes-div">
                                            <AiFillCheckSquare style={{color: "#FE5E37",marginTop: "3px"}}/>
                                            <h4>{question.optionOne.votes.length + question.optionTwo.votes.length}</h4>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state = []) => ({
    authedUser: state.authedUser,
    sortedQuestions: Object.keys(state.Questions).sort((a,b) => state.Questions[b].timestamp - state.Questions[a].timestamp),
    users: state.getUsers,
    questions: state.Questions
});

// const ConnectedAnseredPolls = connect(mapStateToProps)(AnseredPolls);

export default connect(mapStateToProps)(AnseredPolls);;