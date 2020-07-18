<template>
  <div id="home">

    <div v-for="ques in q" v-bind:key="ques.id" class="collection-item">
      <ol>
        <ul>
          <h4> Question:{{ques.Q1}}</h4>
        </ul>
        <ul>
          <h4>(A){{ques.op1}}</h4>
        </ul>
        <ul>
          <h4>(B){{ques.op2}}</h4>
        </ul>
        <ul>
          <h4>(C){{ques.op3}}</h4>
        </ul>
        <ul>
          <h4>(D){{ques.op4}}</h4>
        </ul>
      </ol>
      <router-link v-bind:to="{ name: 'view', params: { Q1: ques.Q1 }}">
        <b-button>View</b-button>
      </router-link>
    </div>

    <div class="fixed-action-btn">
      <router-link to="/add">
        <b-button>Add</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "Ques",
  data() {
    return {
      q: [],
      loading: true
    };
  },
  created() {
    db.collection("Questions")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            Q1: doc.data().Q1,
            op1: doc.data().op1,
            op2: doc.data().op2,
            op3: doc.data().op3,
            op4: doc.data().op4
          };
          this.q.push(data);
        });
      });
  }
};
</script>