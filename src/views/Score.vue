<template>
  <div>
    <h1>{{name}}, you answered {{score}} correctly out of 5</h1>

    <h3>
        <button class="btn btn-success" @click="retake">Click Here To Retake The Exam</button>
    </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
        ...mapGetters({
            name: 'question/getName',
            score: 'question/getScore'
        })
    },
    methods: {
        retake(){
            this.resetModuleState()
            this.$router.push({ name: 'exam'})
        },
        resetModuleState(){
            this.$store.commit('question/resetModuleState')
        }
    },
}
</script>