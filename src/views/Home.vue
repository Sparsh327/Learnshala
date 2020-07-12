<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/SU.png">
    <HelloWorld msg=""/>
    <h1>School of Engeineering and Technology</h1>
    <h2>Presents</h2>
    <h2>LEARNSHALA</h2>
    <img src="@/assets/books.png" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.home{
  text-align: center;
}

</style>
