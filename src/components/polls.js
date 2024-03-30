import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './styles/polls.css';
import HeaderTag from './header';
import SideMenu from './sidemenu';
import { useParams } from 'react-router-dom';
import {handleSaveQuestionsAnswer} from '../actions/questions';
import { useNavigate, useLocation} from 'react-router-dom';
import {updateUserAnswer} from '../actions/login';
import { AiFillCheckSquare } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillPieChart } from 'react-icons/ai';
import { AiFillFile } from "react-icons/ai";
import { RiFileUnknowFill } from "react-icons/ri";

const Polls = (props) => {
    const location = useLocation();
    let authedUserData = Object.values(props.users).filter((user) => user.id === props.authedUser);
    const navigate = useNavigate();
    var {id} = useParams();
    const [question, setQuestion] = useState({});
    let questions;
    useEffect(() => {
        if(props.authedUser === null || undefined) {
            localStorage.removeItem("loginUser");
            localStorage.setItem("pageURL", window.location.pathname);
            navigate("/", {
                state: {
                    prevURL: location.pathname
                }
            });
        }

        if(id == "undefined") {
            navigate("/dashboard");
        }
    },[]);

    const getData = () => {
        questions = Object.values(props.questions).filter((questions) => questions.id === id);
        console.log(questions);
    }

    getData();
    // var questions = Object.values(props.questions).filter((questions) => questions.id === id);

    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toDateString();
    }
    const takePoll = (authedUser,qid,answer) => {
        props.dispatch(handleSaveQuestionsAnswer({authedUser,qid,answer})).then(() => {
            setQuestion({authedUser,qid,answer});
            props.dispatch(updateUserAnswer({authedUser,qid,answer}));
            getData();
        });
    }

    
    return (
        <div className="polls-main">
            <SideMenu/>
            <HeaderTag users={authedUserData}/>
            <div className="polls-content">
                {questions.length > 0 && <div className="polls-header">
                    <h1>Would You Rather</h1>
                    {/* <img src={authedUserData[0].avatarURL} alt="user_avatar" width={100} height={100} style={{backgroundColor: "#FFFFFF",padding: "30px",borderRadius: "75px"}}/> */}
                </div>}

                <div className="polls-body">
                    {questions.length > 0 && <div className="poll-list-wrapper">
                        {/* <div className="poll-list-contianer">
                            <img src={logo} className="App-logo" alt="logo" width={40} height={40} style={{padding: "0px"}}/>
                            <span className="question-author">{props.questions[0].author}</span>
                        </div> */}
                        <div className="date-vote-div">
                            <div>
                                <span className="question-date">{questions.length > 0 && getDate(questions[0].timestamp)}</span>
                            </div>
                            {(questions[0].optionOne.votes.includes(props.authedUser)) && <div style={{display: "flex"}} className="voted-label">
                                <span>
                                    <AiFillCheckCircle style={{color: "#8AC389"}}/>
                                </span>
                            </div>}
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
                                { 
                                    (questions[0].optionOne.votes.includes(props.authedUser) || questions[0].optionTwo.votes.includes(props.authedUser)) && 
                                    <button type="button" className="btn btn-primary" disabled onClick={() => takePoll(props.authedUser,questions[0].id,'optionOne')}>Click</button>
                                }
                                { 
                                    (!questions[0].optionOne.votes.includes(props.authedUser) && !questions[0].optionTwo.votes.includes(props.authedUser)) &&
                                    <button type="button" className="btn btn-primary" onClick={() => takePoll(props.authedUser,questions[0].id,'optionOne')}>Click</button>
                                }
                            </span>
                        </div>
                        {(questions[0].optionOne.votes.includes(props.authedUser) || questions[0].optionTwo.votes.includes(props.authedUser)) && <div className="data-div">
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
                        </div>}
                    </div>}
                    {questions.length > 0 && <div>
                        <h2 style={{textAlign: "center",fontWeight: "Bold",marginTop: "60px"}}>Or</h2>
                    </div>}
                    {questions.length > 0 && <div className="poll-list-wrapper">
                        {/* <div className="poll-list-contianer">
                            <img src={logo} className="App-logo" alt="logo" width={40} height={40} style={{padding: "0px"}}/>
                            <span className="question-author">{props.questions[0].author}</span>
                        </div> */}
                        <div className="date-vote-div">
                            <div>
                                <span className="question-date">{questions.length > 0 && getDate(questions[0].timestamp)}</span>
                            </div>
                            {(questions[0].optionTwo.votes.includes(props.authedUser)) && <div style={{display: "flex"}} className="voted-label">
                                <span>
                                    <AiFillCheckCircle style={{color: "#8AC389"}}/>
                                </span>
                            </div>}
                        </div>
                        <div>
                            <span className="question-text">
                                {questions.length > 0 && questions[0].optionTwo.text}
                            </span>
                            <hr/>
                            <span className="question-text">
                                {
                                    (questions[0].optionOne.votes.includes(props.authedUser) || questions[0].optionTwo.votes.includes(props.authedUser)) && 
                                    <button type="button" className="btn btn-primary" disabled onClick={() => takePoll(props.authedUser,questions[0].id,'optionTwo')}>Click</button>
                                }
                                {
                                    (!questions[0].optionOne.votes.includes(props.authedUser) && !questions[0].optionTwo.votes.includes(props.authedUser)) && 
                                    <button type="button" className="btn btn-primary" onClick={() => takePoll(props.authedUser,questions[0].id,'optionTwo')}>Click</button>
                                }
                            </span>
                        </div>

                        {(questions[0].optionOne.votes.includes(props.authedUser) || questions[0].optionTwo.votes.includes(props.authedUser)) && <div className="data-div">
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
                        </div>}
                    </div>}
                    {questions.length == 0 && <div style={{margin: "auto"}}>
                    <div style={{marginTop: "100px",width: "fit-content",backgroundColor: "#FFFFFF",padding: "30px",margin: "130px auto",height: "fit-content",borderRadius: "7px",textAlign: "center"}}>
                        <RiFileUnknowFill style={{width: "50px", height: "50px"}}/>
                        <h3 style={{textAlign: "center",fontWeight: "Bold",marginTop: "20px",color: "#000000",fontSize: "30px"}}>404</h3>
                        <p style={{textAlign: "center"}}>Item Not Found!</p>
                        <p>The item you are trying to view does not exists. Please enter the correct question id.</p>
                    </div>
                </div>}
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