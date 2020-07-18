<template>
  <div class="container">
    <h3>Edit Question</h3>
    <div class="row">
      <form @submit.prevent="updateEmployee">
        <div >
          <div>
            <input type="text" v-model="Q1" required />
            <label>Question</label>
          </div>
        </div>
        <div >
          <div>
            <input type="text" v-model="op1" required />
            <label>Option1</label>
          </div>
        </div>
        <div >
          <div>
            <input type="text" v-model="op2" required />
            <label>Option2</label>
          </div>
        </div>
        <div >
          <div>
            <input type="text" v-model="op3" required />
            <label >Option3</label>
          </div>
          <div >
              <div>
                  <input type="text" v-model='op4' required />
                  <label>Option4</label>
              </div>
          </div>
          <div >
              <div>
                  <input type="text" v-model='ans' required />
                  <label >Answer</label>
              </div>
          </div>
        </div>
        <button type="submit">Submit</button>
        <router-link to="/Quiz">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "edit",
  data() {
    return {
      Q1: null,
      op1: null,
      op2: null,
      op3: null,
      op4: null,
      ans: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("Questions")
      .where("Q1", "==", to.params.Q1)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.Q1 = doc.data().Q1;
            vm.op1 = doc.data().op1;
            vm.op2 = doc.data().op2;
            vm.op3 = doc.data().op3;
            vm.op4 = doc.data().op4;
            vm.ans = doc.data().ans;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("Questions")
        .where("Q1", "==", this.$route.params.Q1)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.Q1 = doc.data().Q1;
            this.op1 = doc.data().op1;
            this.op2 = doc.data().op2;
            this.op3 = doc.data().op3;
            this.op4 = doc.data().op4;
            this.ans = doc.data().ans;
          });
        });
    },
    updateEmployee() {
      db.collection("Questions")
        .where("Q1", "==", this.$route.params.Q1)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                Q1: this.Q1,
                op1: this.op1,
                op2: this.op2,
                op3: this.op3,
                op4: this.op4,
                ans: this.ans,
              })
              .then(() => {
                this.$router.push({
                  name: "view",
                  params: { Q1: this.Q1 }
                });
              });
          });
        });
    }
  }
};
</script>