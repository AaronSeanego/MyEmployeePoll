import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Page404 = () => {
    return  (
        <div className="App">
        {/* <SideMenu/> */}
        {/* <HeaderTag users={autherUserData}/> */}
        <div className="page404-content">
            <div className='page404-content-wrapper'>
                <div className='page404-content-container' style={{textAlign: "center",backgroundColor: "#ffffff",width: "fit-content",margin: "80px auto",padding: "50px",borderRadius: "7px"}}>
                    <div className='page404-content'>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>The page you are looking for does not exist.</p>
                        <Link to="/" style={{color: "#000"}}>
                            <span style={{backgroundColor: "#8AC389",padding: "8px",borderRadius: "7px"}}>
                                <AiFillHome style={{color: "#000"}}/>
                                <span style={{color: "#000"}}>
                                    Home
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Page404;