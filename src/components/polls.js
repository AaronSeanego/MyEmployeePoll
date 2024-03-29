import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './styles/polls.css';
import HeaderTag from './header';
import SideMenu from './sidemenu';
// import logo from '../logo.svg';
import { useParams } from 'react-router-dom';
import {handleSaveQuestionsAnswer} from '../actions/questions';
import { useNavigate } from 'react-router-dom';
import {updateUserAnswer} from '../actions/login';
import { AiFillCheckSquare } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillPieChart } from 'react-icons/ai';

const Polls = (props) => {
    let authedUserData = Object.values(props.users).filter((user) => user.id === props.authedUser);
    const navigate = useNavigate();
    var {id} = useParams();
    const [question, setQuestion] = useState({});

    useEffect(() => {
        if(props.authedUser === null || undefined) {
            navigate("/");
        }

        if(id == "undefined") {
            navigate("/dashboard");
        }
    },[]);

    var questions = Object.values(props.questions).filter((questions) => questions.id === id);
    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toDateString();
    }
    const takePoll = (authedUser,qid,answer) => {
        props.dispatch(handleSaveQuestionsAnswer({authedUser,qid,answer})).then(() => {
            setQuestion({authedUser,qid,answer});
            props.dispatch(updateUserAnswer({authedUser,qid,answer}));
            navigate("/dashboard");
        });
    }

    
    return (
        <div className="polls-main">
            <SideMenu/>
            <HeaderTag users={authedUserData}/>
            <div className="polls-content">
                <div className="polls-header">
                    <h1>Would You Rather</h1>
                    <img src={authedUserData[0].avatarURL} alt="user_avatar" width={100} height={100} style={{backgroundColor: "#FFFFFF",padding: "30px",borderRadius: "75px"}}/>
                </div>
                <div className="polls-body">
                    <div className="poll-list-wrapper">
                        {/* <div className="poll-list-contianer">
                            <img src={logo} className="App-logo" alt="logo" width={40} height={40} style={{padding: "0px"}}/>
                            <span className="question-author">{props.questions[0].author}</span>
                        </div> */}
                        <div className="date-vote-div">
                            <div>
                                <span className="question-date">{questions.length > 0 && getDate(questions[0].timestamp)}</span>
                            </div>
                            <div style={{display: "flex"}} className="voted-label">
                                {questions[0].optionOne.votes.includes(questions[0].author) &&<span>
                                    <AiFillCheckCircle style={{color: "#8AC389"}}/>
                                </span>}
                            </div>
                        </div>
                        <div>
                            <span className="question-text">
                                {questions.length > 0 && questions[0].optionOne.text}
                            </span>
                            <hr/>
                            {/* <span>
                                <AiFillCheckSquare/>
                                {questions[0].optionOne.votes.length}
                            </span> */}
                            <span className="question-text">
                                <button type="button" className="btn btn-primary" onClick={() => takePoll(props.authedUser,questions[0].id,'optionOne')}>Click</button>
                            </span>
                        </div>
                        <div className="data-div">
                            <div className="question-status">
                                <span className="votes-div">
                                    <AiFillCheckSquare style={{color: "#FE5E37",marginTop: "3px"}}/>
                                    <h4>{questions[0].optionOne.votes.length}</h4>
                                </span>
                            </div>
                            <div className="question-status" style={{width: "70px",marginLeft: "10px"}}>
                                <span className="votes-div" style={{display: "flex",width: "80px",backgroundColor: "#8ac38932"}}>
                                    <AiFillPieChart style={{color: "#8AC389",marginTop: "3px"}}/>
                                    <h4 style={{color: "#8AC389"}}>
                                        {
                                            questions[0].optionOne.votes.length > 0 &&
                                            Math.round((questions[0].optionOne.votes.length / (questions[0].optionOne.votes.length + questions[0].optionTwo.votes.length)) * 100)
                                        }
                                        {
                                            questions[0].optionOne.votes.length == 0 && Math.round(0)
                                        }{''}%
                                    </h4>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 style={{textAlign: "center",fontWeight: "Bold",marginTop: "60px"}}>Or</h2>
                    </div>
                    <div className="poll-list-wrapper">
                        {/* <div className="poll-list-contianer">
                            <img src={logo} className="App-logo" alt="logo" width={40} height={40} style={{padding: "0px"}}/>
                            <span className="question-author">{props.questions[0].author}</span>
                        </div> */}
                        <div className="date-vote-div">
                            <div>
                                <span className="question-date">{questions.length > 0 && getDate(questions[0].timestamp)}</span>
                            </div>
                            <div style={{display: "flex"}} className="voted-label">
                                {questions[0].optionTwo.votes.includes(questions[0].author) &&<span>
                                    <AiFillCheckCircle style={{color: "#8AC389"}}/>
                                </span>}
                            </div>
                        </div>
                        <div>
                            <span className="question-text">
                                {questions.length > 0 && questions[0].optionTwo.text}
                            </span>
                            <hr/>
                            <span className="question-text">
                                <button type="button" className="btn btn-primary" onClick={() => takePoll(props.authedUser,questions[0].id,'optionTwo')}>Click</button>
                            </span>
                        </div>

                        <div className="data-div">
                            <div className="question-status">
                                <span className="votes-div">
                                    <AiFillCheckSquare style={{color: "#FE5E37",marginTop: "3px"}}/>
                                    <h4>{questions[0].optionTwo.votes.length}</h4>
                                </span>
                            </div>
                            <div className="question-status" style={{width: "70px",marginLeft: "10px"}}>
                                <span className="votes-div" style={{display: "flex",width: "80px",backgroundColor: "#8ac38932"}}>
                                    <AiFillPieChart style={{color: "#8AC389",marginTop: "3px"}}/>
                                    <h4 style={{color: "#8AC389"}}>
                                        {
                                            questions[0].optionTwo.votes.length > 0 &&
                                            Math.round((questions[0].optionTwo.votes.length / (questions[0].optionOne.votes.length + questions[0].optionTwo.votes.length)) * 100)
                                        }
                                        {
                                            questions[0].optionTwo.votes.length == 0 && Math.round(0)
                                        }{''}%
                                    </h4>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    authedUser: state.authedUser,
    users: state.getUsers,
    // questions: Object.values(state.Questions).filter((questions) => questions.id === "8xf0y6ziyjabvozdd253nd"),
    questions: state.Questions
});
// const ConnectedPolls = connect(mapStateToProps)(Polls);

export default connect(mapStateToProps)(Polls);