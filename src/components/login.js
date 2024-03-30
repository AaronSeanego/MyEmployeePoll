import { useRef } from 'react';
// import "./styles/login.css";
import {logIn} from '../actions/login';
import {handleLogin} from '../actions/login';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setAuthedUser} from '../actions/authedUser';

const UserLogin = (props) => {
    // localStorage.setItem("pageURL", window.location.pathname);
    console.log(localStorage.getItem("pageURL"));
    // console.log(localStorage.getItem("loginUser"));

    const navigate = useNavigate();
    const userNameInput = useRef();
    const passwordInput = useRef();
    const userDropdown = useRef();
    
    const logInUser = () => {
        if(userDropdown.current.value == "Select User....") {
            return alert("Please select a user to login!!!");
        }else {
            props.dispatch(handleLogin(userDropdown.current.value));
            if(localStorage.getItem("pageURL") == null) {
                navigate("/dashboard");
            }else if(localStorage.getItem("pageURL") == "/") {
                navigate("/dashboard");
            }else if(localStorage.getItem("pageURL") == undefined) {
                navigate("/dashboard");
            }else {
                navigate(localStorage.getItem("pageURL"));
            }
        }
    }

    return (
        <div className="login-form-container">
            <div className="login-form-wrapper">
                <form>
                    <div className="input-form-control">
                        <select ref={userDropdown} data-testid='test-select'>
                            <option defaultValue={"Select User"}>Select User....</option>
                            {
                                Object.values(props.users).map((users) => 
                                <option key={users.id} value={users.id}>{users.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="input-form-control">
                        <button type="button" data-testid = "loginButton" className="btn btn-primary" onClick={logInUser}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// const ConnectedUsersData = connect((state) => ({
//     users: state.getUsers
// }))(UserLogin);

const mapStateToProps = ({getUsers})=> ({
    // users: state.getUsers
    users: getUsers
});

export default connect(mapStateToProps)(UserLogin);