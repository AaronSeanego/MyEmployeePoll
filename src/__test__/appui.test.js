import React from 'react';
import '@testing-library/jest-dom';
import {cleanup, fireEvent, render,screen } from '@testing-library/react';
import store from '../data/store';
import App from '../App';
import UserLogin from '../components/login';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
// import '@testing-library/jest-dom/extend-expect';
import DashBoard from '../components/dashboard';
import CreatePolls from '../components/createPolls';

describe("Display UI", () => {
    it("this section of the code will render the app component.", async () => {
        var component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        
        const usernameDropdown = component.getByTestId("test-select");
        const loginButton = component.getByTestId("loginButton");

        expect(usernameDropdown).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
        expect(usernameDropdown).toHaveValue("Select User....");

        fireEvent.change(usernameDropdown,{
            target: 
                {value: "sarahedo"}
        });
        fireEvent.click(loginButton);
        expect(component).toMatchSnapshot();
    });


    it("This code will test dasboard render", async () => {
        var component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DashBoard/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(true).toBe(true);
    });

    it("This code will test dasboard render", async () => {
        var component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <CreatePolls/>
                </BrowserRouter>
            </Provider>
        );

        const optionOne = component.getByTestId("optionOneField");
        const optionTwo = component.getByTestId("optionTwoField");
        const addNewPollBtn = component.getByTestId("add_new_poll_btn");

        expect(optionOne).toBeInTheDocument();
        expect(optionTwo).toBeInTheDocument();
        expect(addNewPollBtn).toBeInTheDocument();

        fireEvent.change(optionOne,{
            target: 
                {value: "optionOne"}
        });

        fireEvent.change(optionTwo,{
            target: 
                {value: "optionTwo"}
        });

        // fireEvent.click(addNewPollBtn);

        expect(optionOne).toHaveValue("optionOne");
        expect(optionTwo).toHaveValue("optionTwo");
        expect(component).toMatchSnapshot();
        expect(true).toBe(true);
    });
})