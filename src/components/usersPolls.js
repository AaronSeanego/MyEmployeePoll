import { useEffect } from 'react';
// import logo from "../logo.svg";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../components/styles/usersPolls.css';


const UsersPolls = (props) => {
    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toDateString();
    }
    return (
        <div className="main-content-data">
            <div className="content">
                <div className="contentWrapper">
                        {
                            Object.values(props.questions).map((question) => 
                            (question.author === props.users && (question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0)) && <div className="list-wrapper" key={question.id}>
                                <div className="list-contianer">
                                    <span className="question-author">{question.author}</span>
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
                            </div>
                            )
                        }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.authedUser,
    questions: state.Questions
})

const ConnectedUsersPolls = connect(mapStateToProps)(UsersPolls);
export default ConnectedUsersPolls;