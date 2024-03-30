import { useEffect,useState,Fragment } from 'react';
import './App.css';
import UserLogin from './components/login';
import * as API from './data/_DATA';
import { handleGetUser } from './actions/login';
import {getUser} from './actions/login';
import {receiveQuestions} from './actions/questions';
import {handleInitialData} from './actions/shared';
import {connect} from'react-redux';
import { Route, Router,Routes} from "react-router-dom";
import DashBoard from './components/dashboard';
import CreatePoll from './components/createPolls';
import LeaderBoard from './components/leaderboard';
import CreatePolls from './components/polls';
import Page404 from './page404';

function App(props) {
  const [pageURL, setURL] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    localStorage.setItem("pageURL", window.location.pathname);
    props.dispatch(handleInitialData(props.store)).then(() => {
      setURL(window.location.pathname);
    });
  }, []);
  // if(props.loading == true) {
  //   return <div><h3>Loading.....</h3></div>
  // }
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<UserLogin/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/add" element={<CreatePoll/>}/>
        <Route path="/leaderboard" element={<LeaderBoard/>}/>
        <Route path="/polls/:id" element={<CreatePolls/>}/>
        <Route path="/*" element={<Page404/>}/>
      </Routes>
    </Fragment>
  );
}

// const ConnectedApp = connect((state)=> ({
//   loading: state.loading
// }))(App);

const mapStateToProps = (state)=> ({
  loading: state.loading
});

export default connect(mapStateToProps)(App);
