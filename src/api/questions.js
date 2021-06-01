import { API } from './index'

export default {
    get: () => API.get('/questions'),
    sendAnswers: params => API.post('/questions/answers', params),
}