import { useEffect } from 'react';
// import logo from '../logo.svg';
import { connect } from 'react-redux';
import HeaderTag from './header';
import SideMenu from './sidemenu';
import './styles/leaderboard.css';
import { useNavigate } from 'react-router-dom';

const LeaderBoard = (props) => {
    let usersIDs = Object.keys(props.users);
    const autherUserData = Object.values(props.users).filter((user) => user.id === props.authedUser);
    const navigate = useNavigate();
    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toDateString();
    }

    let userInfo = [];

    function getUserInfo(users = {},sum) {
        return {...users,sum}
    }
    function sortUserInfo() {
        for(let i = 0; i < usersIDs.length; i++) {
            const user = props.users[usersIDs[i]];
            const sumOfAnswers = Object.values(props.users[usersIDs[i]].answers).length;
            const sumOfQuestions = props.users[usersIDs[i]].questions.length;
            const sum = sumOfAnswers + sumOfQuestions;
            const userData = getUserInfo(user,sum);
            userInfo.push(userData);
        }
    }

    sortUserInfo();
    userInfo.sort((a,b) => b.sum - a.sum);

    useEffect(() => {
        if(props.authedUser === null || undefined) {
            navigate("/");
        }
    },[]);

    return (
        <div className="leaderboard-main">
            <SideMenu/>
            <HeaderTag users={autherUserData}/>
            <div className="leaderboard-content">
                <div className="leaderboard-wrapper">
                    <table className="leaderboard">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Created</th>
                                <th>Answered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.values(userInfo).map((user) => 
                                    <tr key={user.id}>
                                        <td>
                                            <img src={user.avatarURL} alt="users" width={30} height={30} style={{float: "left",marginRight: "5px"}}/>
                                            <h3 style={{marginTop: "0px",marginBottom: "0px",marginTop: "0px"}}>{user.name}</h3>
                                            <span>{user.id}</span>
                                        </td>
                                        <td>{user.questions.length}</td>
                                        <td>{Object.keys(user.answers).length}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
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
// const ConnectedLeaderBoard = connect(mapStateToProps)(LeaderBoard);

export default connect(mapStateToProps)(LeaderBoard);