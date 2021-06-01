<template>
  <div>
    <h1>Enter Your Name</h1>
    <input type="text" v-model="name" required>
    <button class="btn btn-primary" @click="startExam">Start Exam</button>

  </div>
</template>

<script>
export default {
    data(){
        return{
            name:""
        }
    },
    methods:{
        startExam(){
            if(this.name){
                this.$store.commit('question/setName',this.name)
                this.$router.push({ name: 'question', params: { qindex: '0' }})
            }
        },
        getQuestions(){
            this.$store.dispatch('question/getQuestions')
        }
    },
    mounted(){
        this.getQuestions()
    },
}
</script>