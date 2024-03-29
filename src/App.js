import { useEffect,useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import UserLogin from './components/login';
import UserLogin from './components/login';
import * as API from './data/_DATA';
import { handleGetUser } from './actions/login';
import {getUser} from './actions/login';
import {receiveQuestions} from './actions/questions';
import {handleInitialData} from './actions/shared';
import {connect} from'react-redux';
import { Route, Router,Routes } from "react-router-dom";
import DashBoard from './components/dashboard';
import CreatePoll from './components/createPolls';
import LeaderBoard from './components/leaderboard';
import CreatePolls from './components/polls';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData(props.store))
  }, []);

  // if(props.loading == true) {
  //   return <div><h3>Loading.....</h3></div>
  // }
  return (
    <Routes>
      <Route path="/" element={<UserLogin/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/add" element={<CreatePoll/>}/>
      <Route path="/leaderboard" element={<LeaderBoard/>}/>
      <Route path="/polls/:id" element={<CreatePolls/>}/>
    </Routes>
  );
}

// const ConnectedApp = connect((state)=> ({
//   loading: state.loading
// }))(App);

const mapStateToProps = (state)=> ({
  loading: state.loading
});

export default connect(mapStateToProps)(App);
