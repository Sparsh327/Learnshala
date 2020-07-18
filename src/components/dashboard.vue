<template>
  <div class="container">
    <div class="jumbotron">
      <h1>{{ msg }}</h1>
      <div v-for="Teachers in Teacher" v-bind:key="Teachers.id">
        <div id='t'>
            <ol>
               <ul><h4>Name:{{Teachers.Name}}</h4></ul>
               <ul><h4>Code:{{Teachers.code}}</h4></ul>
               <ul><h4>Email:{{Teachers.Email}}</h4></ul>
               <ul><h4>SystemID:{{Teachers.SystemID}}</h4></ul>
                
            </ol>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  data() {
    return {
      Teacher: [],
      loading: true
    };
  },
  created() {
    db.collection("Teacher")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            Name: doc.data().Name,
            Email: doc.data().Email,
            SystemID: doc.data().SystemID,
            code: doc.data().code
          };
          this.Teacher.push(data);
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
