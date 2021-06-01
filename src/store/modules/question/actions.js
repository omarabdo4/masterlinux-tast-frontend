import questions from '../../../api/questions';

export default {
    getQuestions({ commit }) {
        return new Promise((resolve, reject) => {
            questions.get().then(response => {
                commit('setQuestions', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    },
    sendAnswers({ commit,getters }) {
        return new Promise((resolve, reject) => {
            questions.sendAnswers({answers:getters.getAnswers}).then(response => {
                commit('setScore', response.data.score);
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    }
}