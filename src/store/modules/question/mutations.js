const initialState = require('./initialState')

export default {
    setQuestions(state, questions) {
        state.questions = questions
    },
    setName(state,name){
        state.name = name
    },
    setScore(state, score) {
        state.score = score
    },
    addAnswer(state,answer){
        if(!state.answers){
            state.answers = []
        }
        state.answers.push(answer)
    },
    resetModuleState(state){
        Object.assign(state, initialState())
    }
}