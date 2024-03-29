## Installation

1. Run `npm install` to download all dependencies.
2. Run `npm start` to start the application.
3. Runs the app in the development mode on (http://localhost:3000).


## Rubic Checks

## Login Flow

1. Is the application easy to install and start? Yes
2. Does the application include README with clear installation and launch instructions? Yes
3. Does the application have a way to log in and log out? Yes
4. Does the application work correctly regardless of which person the user impersonates? Yes

## Application Functionality

1. Does the home page have the desired functionality? Yes
2. Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page? Yes
3. Are the details of each poll displayed with all of the relevant information? Yes
4. Does the voting mechanism work correctly? Yes
5. Can users add new polls? Yes
6. Does the leaderboard work correctly and have the desired functionality? Yes
7. Is the application navigable? Yes
8. Does the application interact with the backend correctly? Yes
9. Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly? Yes

## Architecture

1. Does the store serve as the application’s single source of truth? Yes
2. Is application state managed by Redux? Yes
3. Does application state update correctly? Yes
4. Does the architecture of the application make sense? Yes

## Unit Testing

1. Are jest, @testing-library/react, and @testing-library/jest-dom present in the project? Yes
2. Can all the unit test be run by entering the npm start test command? Yes
3. Do all the unit tests pass? Yes
4. Are there at least 10 unit tests? Yes
5. Are There two unit tests written which test the _saveQuestion() function in _DATA.js? Yes
6. Are there two unit tests written which test the _saveQuestionAnswer() function in _DATA.js? Yes
7. Is there at least one snapshot test present? Yes
8. Is there is at least one DOM test which uses the fireEvent function? Yes



# A little bit about my application

This is my Employee Polls Application. The application was created using a "_DATA.js file which represents a fake database and lets you access the data as well as React/Redux.
You can login with your username and password. This will take you to the dashboard where there are answered and unanswered questions. You can view qustions as well as answer them. You can also create a new poll with your own questions of would you rather. There is also a leaderboard to see the amount of votes that has been cast by the users within the polls. You can logout as well when you are done. The project is bootstrapped using Create React App using a Redux template.

# I created 4 users with the following username and passwords.

1.  Username: sarahedo
    Password: password123

2.  Username: mtsamis
    Password: xyz123

3.  Username: zoshikanlu
    Password: pass246

3.  Username: tylermcginnis
    Password: abc321

# Data

There are two types of objects stored in our database:

* Users
* Questions

# Your code will talk to the database via 4 methods:

getUsers
getQuestions
saveQuestion
saveQuestionAnswer

# npm run test 1

1. _saveQuestionAnswer
2. _saveQuestion

_saveQuestion                                                                                                    
    √ returns                                                                             
    √ returns error                                                              
  _saveQuestionAnswer                                                                                              
    √ returns saved answer                                                  
    √ returns error                                                                
                                                                                                                   
Test Suites: 1 passed, 1 total
Tests: 4 passed, 4 total