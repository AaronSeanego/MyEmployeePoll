import { useRef } from 'react';
// import logo from "../logo.svg";
import './styles/header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeaderTag = (props) => {
    const navigate = useNavigate();
    const logOut = () => {
        navigate("/");
    };

    return (
        <header className="App-header">
            <div className="header-wrapper">
                {props.users.length > 0 && <span style={{backgroundColor: "#8ac38932",padding: "10px",borderRadius: "7px"}}>
                    <img src={ props.users[0].avatarURL != undefined && props.users[0].avatarURL} alt="logo" style={{backgroundColor: "#ECEDEF",padding: "5px",borderRadius: "70px",width: "5vh", height: "5vh"}}/>
                    <h3 style={{marginTop: "5px",fontSize: "3vh"}}>{props.users[0].id}</h3>
                    <button type="button" onClick={logOut}>Log Out</button>
                </span>}
            </div>
        </header>
    );
}

export default HeaderTag;