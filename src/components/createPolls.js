import { useEffect,useRef, useState } from 'react';
import {handleAddNewQuestions} from '../actions/questions';
import './styles/createPolls.css';
import HeaderTag from './header';
import SideMenu from './sidemenu';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreatePolls = (props) => {
    const navigate = useNavigate();

    const autherUserData = Object.values(props.users).filter((user) => user.id === props.authedUser);
    const initialQuestionObject = {
		author: props.authedUser,
		optionOneText: '',
		optionTwoText: '',
	}

	const [question, setQuestion] = useState(initialQuestionObject)

    useEffect(() => {
        if(props.authedUser === null || undefined) {
            navigate("/");
        }
    },[]);

    const firstInput = useRef();
    const secondInput = useRef();

    const AddPoll = () => {
        const optionOne = firstInput.current.value;
        const optionTwo = secondInput.current.value;

        if((firstInput.current.value == "" || null) || (secondInput.current.value == "" || null)) {
            return alert("Please fill in all fields.");
        }else {
            initialQuestionObject.optionOneText  = optionOne;
            initialQuestionObject.optionTwoText  = optionTwo;
            setQuestion(initialQuestionObject);
            props.dispatch(handleAddNewQuestions(question)).then(() => {
                setQuestion(initialQuestionObject);
                navigate("/dashboard");
            });
        }
    }
    return (
        <div className="create-form-container">
            <SideMenu/>
            <HeaderTag users={autherUserData}/>
            <div className="main-content">
                <div className="create-polls-wrapper">
                    <h2>Would You Rather</h2>
                    <h4>Create Poll</h4>
                    <div className="create-form-wrapper">
                        <form>
                            <div className="input-control">
                                {/* <label htmlFor="title">Option One</label> */}
                                <input type="text" name="optionOne" id="option_one" data-testid="optionOneField" placeholder="First" ref={firstInput}/>
                            </div>
                            <div>
                                <span>Or</span>
                            </div>
                            <div className="input-control">
                                {/* <label htmlFor="description">Option Two</label> */}
                                <input type="text" name="optionTwo" id="option_two" data-testid="optionTwoField" placeholder="Second" ref={secondInput}/>
                            </div>
                            <div className="input-control">
                                <button type="button" data-testid="add_new_poll_btn" onClick={AddPoll}>Add Poll</button>
                            </div>
                        </form>
                    </div>
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
// const ConnectedCreatePolls = connect(mapStateToProps)(CreatePoll);

export default connect(mapStateToProps)(CreatePolls);