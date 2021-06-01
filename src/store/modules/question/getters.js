export default {
    getName(state) {
        return state.name;
    },
    getQuestionByIndex: (state) => (index) => {
        return state.questions[index];
    },
    getQuestions(state) {
        return state.questions;
    },
    getScore(state) {
        return state.score;
    },
    getAnswers(state){
        return state.answers
    },
}