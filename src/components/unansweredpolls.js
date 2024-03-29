import { useRef } from 'react';
// import logo from "../logo.svg";
import './styles/login.css';
import {logIn} from '../actions/login';
import {handleLogin} from '../actions/login';
import { connect } from 'react-redux';
import './answeredpolls.css';
import './styles/unansweredpolls.css';
import { Link } from 'react-router-dom';


const UnAnseredPolls = (props = []) => {
    let checkVotes = "";
    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toDateString();
    }

    let sortedUnansweredQuestions = [];
    let newsortedUnansweredQuestions = [];
    for(let i = 0; i < props.sortedQuestions.length; i++) {
        sortedUnansweredQuestions.push(props.questions[props.sortedQuestions[i]]);
    }
    Object.values(props.questions).map((el) => {
        if(el.optionOne.votes.length > 0 || el.optionTwo.votes.length > 0) {
            checkVotes = "true";
        }else {
            checkVotes = "false";
        }
    });

    // console.log(sortedUnansweredQuestions.filter((filterQues) => filterQues.optionOne.votes.length == 0 && filterQues.optionTwo.votes.length == 0 || !filterQues.optionTwo.votes.includes(props.authedUser) && !filterQues.optionOne.votes.includes(props.authedUser)));
    newsortedUnansweredQuestions = sortedUnansweredQuestions.filter((filterQues) => filterQues.optionOne.votes.length == 0 && filterQues.optionTwo.votes.length == 0 || !filterQues.optionTwo.votes.includes(props.authedUser) && !filterQues.optionOne.votes.includes(props.authedUser))
    return (
        <div className="App">
            <div className="answered-polls-wrapper">
                <div className="answered-polls-container">
                    {
                        Object.values(newsortedUnansweredQuestions).map((question) => 
                            ( checkVotes = "false" && <div className="list-wrapper" key={question.id}>
                                <div className="list-contianer">
                                    <span className="question-author">{question.author}</span>
                                </div>
                                <div><span className="question-date">{getDate(question.timestamp)}</span></div>
                                <hr/>
                                <div>
                                    <span className="question-text">
                                        <Link to={"/polls/" + question.id}>
                                            <button type="button" className="btn btn-show">Show</button>
                                        </Link>
                                    </span>
                                </div>
                            </div>)
                        )
                    }
                </div>
                { checkVotes == "true" && <div className="no-data-message">
                        <div>
                            <span>There are no polls available. Please create new polls</span>
                        </div>
                    </div>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authedUser: state.authedUser,
    sortedQuestions: Object.keys(state.Questions).sort((a,b) => state.Questions[b].timestamp - state.Questions[a].timestamp),
    users: state.users,
    questions: state.Questions
});

// const ConnectedUnAnseredPolls = connect(mapStateToProps)(UnAnseredPolls);

export default connect(mapStateToProps)(UnAnseredPolls);;