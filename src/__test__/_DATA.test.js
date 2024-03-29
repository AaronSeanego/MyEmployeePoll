import * as API from "../data/_DATA";
var qid;
var authedUser;
var answer;
let pollsData = [];
describe("API Unit testing", () => {
    it("the function _getUsers should exist", async () => {
        const users = await API._getUsers();
        expect(users).toBeDefined();
    });

    it("should return an array of users", async () => {
        const users = await API._getUsers();
        expect(users).not.toBeNull();
        expect(Object.values(users)).not.toEqual({});
    });

    it("the function _getQuestions should exist", async () => {
        const questions = await API._getQuestions();
        expect(questions).toBeDefined();
    });

    it("should return an array of questions", async () => {
        const questions = await API._getQuestions();
        expect(questions).not.toBeNull();
        expect(Object.values(questions)).not.toEqual({});
    });




    // The code below checks for save questions functionality
    it("the function _saveQuestion should exist", async () => {
        const questions = await API._saveQuestion({
            author: "sarahedo",
            optionOneText: "Eat bread",
            optionTwoText: "Drink coffee",
        });
        expect(questions).toBeDefined();
    });

    it("should return a object of new created polls", async () => {
        const questions = await API._saveQuestion({
            author: "sarahedo",
            optionOneText: "Eat bread",
            optionTwoText: "Drink coffee",
        });
        expect(questions).not.toBeNull();
    });

    it("should return an error message", async () => {
        await expect(API._saveQuestion({
            author: null,
            optionOneText: null,
            optionTwoText: null,
        })).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });

    it("should return an error message", async () => {
        await expect(API._saveQuestion({
            author: null,
            optionOneText: "Eat bread",
            optionTwoText: "Drink coffee",
        })).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });

    it("should return an error message", async () => {
        await expect(API._saveQuestion({
            author: "sarahedo",
            optionOneText: "",
            optionTwoText: "Drink coffee",
        })).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });

    // ************************************************************
    // ************************************************************
    // ************************************************************

    // // The code below checks for save answers functionality
    it("the function _saveQuestionAnswer should exist", async () => {
        const questions = await API._saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionOne",
        });
        expect(questions).toBeDefined();
    });

    it("should return a object of answered polls", async () => {
        const questions = await API._saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionOne",
        });
        expect(questions).not.toBeNull();
    });

    it("should return an error message", async () => {
        await expect(API._saveQuestionAnswer({
            authedUser: "",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionOne",
        })).rejects.toEqual("Please provide authedUser, qid, and answer");
    });

    it("should return an error message", async () => {
        await expect(API._saveQuestionAnswer({
            authedUser: "",
            qid: "",
            answer: "optionOne",
        })).rejects.toEqual("Please provide authedUser, qid, and answer");
    });

    // ************************************************************
    // ************************************************************
    // ************************************************************
})