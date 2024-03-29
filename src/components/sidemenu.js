import { Link } from 'react-router-dom';
import './styles/sidemenu.css';
// import logo from "../logo.svg";
import { AiFillSignal,AiOutlineBarChart,AiOutlineBars,AiOutlinePlusCircle,AiOutlineCheckCircle } from 'react-icons/ai';
// import { AiFillHome } from "react-icons/ai";

const SideMenu = () => {
    return (
        <div className="side-menu">
            <div className="side-menu-container">
                <div className="side-menu-header" style={{display: "flex"}}>
                    <img src="https://api.dicebear.com/8.x/avataaars/svg?seed=Oliver" alt="logo" width={40} height={40} style={{padding: "0px"}}/>
                    <h3 className="App-title" style={{marginLeft: "20px"}}>Employee Poll</h3>
                </div>
                <div className="side-menu-body">
                    <ul className="side-menu-list">
                        <li className="side-menu-list-item">
                            <AiOutlineBarChart  style={{color: "#FFFFFF",fontSize: "bold",marginRight: "5px"}}/>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <AiOutlineBars  style={{color: "#FFFFFF",fontSize: "bold",marginRight: "5px"}}/>
                            <Link to="/leaderboard">Leaderboard</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <AiOutlinePlusCircle  style={{color: "#FFFFFF",fontSize: "bold",marginRight: "5px"}}/>
                            <Link to="/add">Add New Polls</Link>
                        </li>
                        {/* <li className="side-menu-list-item">
                            <AiOutlineCheckCircle   style={{color: "#FFFFFF",fontSize: "bold",marginRight: "5px"}}/>
                            <Link to={"/polls/" + "undefined"}>Polls</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;