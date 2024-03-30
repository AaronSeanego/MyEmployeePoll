import { useRef } from 'react';
import { useEffect } from 'react';
import './styles/login.css';
import {logIn} from '../actions/login';
import {handleLogin} from '../actions/login';
import { connect } from 'react-redux';
import AnseredPolls from '../components/answeredpolls';
import UnAnseredPolls from './unansweredpolls';
import HeaderTag from './header';
import SideMenu from "./sidemenu";
import './styles/dashboard.css';
import { useNavigate, useLocation } from 'react-router-dom';
import UserLogin from "../components/login";
import ConnectedUsersPolls from '../components/usersPolls';

const DashBoard = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    let result;

    const detectURLChanges = () => {
        window.onhashchange = function() {
            alert("hashtag changed");
        };
      }
    
    detectURLChanges();

    const autherUserData = Object.values(props.users).filter((user) => user.id === props.authedUser);
    useEffect(() => {
        if(props.authedUser === null || undefined) {
            navigate("/", {
                state: {
                    prevURL: location.pathname
                }
            });
        }else {
            localStorage.setItem("loginUser", props.authedUser);
            localStorage.setItem("pageURL", window.location.pathname);
        }
          
        byDefault();
    },[]);

    function upperCase(str) {
        return result = str.charAt(0).toUpperCase() + str.slice(1);
    }

    function openPoll(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    function byDefault(evt) {
        document.getElementById("defaultOpen").click();
    }
    
    return (
        <div className="App">
            <SideMenu/>
            <HeaderTag users={autherUserData}/>
            <div className="main-content">
                <div className="tab">
                    <button className="tablinks" id = "defaultOpen" onClick={(event) => {openPoll(event, 'London')}}>Unanswered</button>
                    <button className="tablinks" onClick={(event) => {openPoll(event, 'Paris')}}>Answered</button>
                </div>

                <div id="London" className="tabcontent">
                    <UnAnseredPolls questions={props.questions}/>
                </div>

                <div id="Paris" className="tabcontent">
                    <AnseredPolls questions={props.questions}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>  ({
    authedUser: state.authedUser,
    users: state.getUsers,
    questions: state.Questions
});

export default connect(mapStateToProps)(DashBoard);