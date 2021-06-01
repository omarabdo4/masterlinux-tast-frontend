<template>
  <div class="container">
    <h2>{{question.content}}</h2>
    <div class="my-2" v-for="answer in question.answers" :key="answer._id">
        <input class="form-check-input me-2" type="radio"  :id="answer._id" :value="answer._id" v-model="answerId" name="questionAnswer">
        <label class="form-check-label" :for="answer._id">
            {{answer.content}}
        </label>
    </div>
    <button class="btn btn-primary" @click="addAnswer" v-if="!!answerId">{{ isLastQuestion ? "Finish" : "Next" }}</button>
  </div>
</template>


<script>

export default {
    data(){
        return {
            qindex:null,
            question:null,
            isLastQuestion:false,
            answerId:null
        }
    },
    methods: {
        getQuestionByIndex(index){
            this.question = this.$store.getters['question/getQuestionByIndex'](index)
        },
        addAnswer(){
            const qid = this.question.id
            const aid = this.answerId
            const qindex = this.qindex
            this.$store.commit('question/addAnswer',{
                questionId:qid,
                answerId:aid
            })
            if(this.isLastQuestion){
                this.$store.dispatch('question/sendAnswers')
                this.$router.push({ name: 'score'})
            }else{
                this.$router.push({ name: 'question', params: { qindex: qindex + 1 }})
            }
        },
        loadQuestion(){
            const qindex = parseInt(this.$route.params.qindex)
            this.qindex = qindex
            this.getQuestionByIndex(qindex)
            this.isLastQuestion = qindex == 4
        }
    },
    created(){
        this.loadQuestion()
    },
    mounted(){
        this.loadQuestion()
    },
}
</script>