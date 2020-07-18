<template>
  <div class="container">   
      <h1>MCQ QUESTIONS</h1> 
      <div class="jumbotron">
    <div class="container">
        <Ques/>
    </div>
    </div>
    </div>
</template>

<script>
import Ques from '@/components/quiz1.vue'
export default {
    name: 'quiz',
    components:{
        Ques
    }
}
</script>