import { useRef } from 'react';
// import logo from "../logo.svg";
import './styles/header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

const HeaderTag = (props) => {
    const navigate = useNavigate();
    const logOut = () => {
        navigate("/");
    };

    const setPageURL = (url) => {
        // localStorage.setItem("pageURL", url);
        localStorage.removeItem("loginUser");
    };

    const triggerFunc = () => {
        logOut();
        setPageURL(window.location.pathname);
    }
    return (
        <header className="App-header">
            <div style={{width: "fit-content"}}>
                <span style={{position: "static"}}>
                    <Link to="/dashboard">
                        <AiFillHome style={{color: "#000"}}/>
                    </Link>
                </span>
            </div>
            <div className="header-wrapper">
                {props.users.length > 0 && <span style={{backgroundColor: "#8ac38932",padding: "10px",borderRadius: "7px"}}>
                    <img src={ props.users[0].avatarURL != undefined && props.users[0].avatarURL} alt="logo" style={{backgroundColor: "#ECEDEF",padding: "5px",borderRadius: "70px",width: "5vh", height: "5vh"}}/>
                    <h3 style={{marginTop: "5px",fontSize: "3vh"}}>{props.users[0].id}</h3>
                    <button type="button" onClick={triggerFunc}>Log Out</button>
                </span>}
            </div>
        </header>
    );
}

export default HeaderTag;