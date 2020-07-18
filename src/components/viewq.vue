<template>
  <div id="view-employee">
    <ul >
      <li ><h1>{{Q1}}</h1></li>
      <li ><h4>(A){{op1}}</h4></li>
      <li ><h4>(B){{op2}}</h4></li>
      <li ><h4>(c){{op3}}</h4></li>
      <li ><h4>(D){{op4}}</h4></li>
      <li ><h4>Answer:{{ans}}</h4></li>
    </ul>
    <router-link to="/Quiz"><b-button>Back</b-button></router-link>
    <b-button @click="deleteEmployee">Delete</b-button>

    <div >
       <router-link v-bind:to="{ name: 'edit', params: { Q1: Q1 }}">
           <b-button>Edit</b-button>
       </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'view',
    data () {
      return {
        Q1: null,
        op1: null,
        op2: null,
        op3: null,
        op4: null,
        ans: null,
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('Questions').where('Q1', '==', to.params.Q1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.Q1 = doc.data().Q1
            vm.op1 = doc.data().op1
            vm.op2 = doc.data().op2
            vm.op3 = doc.data().op3
            vm.op4 = doc.data().op4
            vm.ans = doc.data().ans
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('Questions').where('Q1', '==', this.$route.params.Q1).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.Q1 = doc.data().Q1
            this.op1 = doc.data().op1
            this.op2 = doc.data().op2
            this.op3 = doc.data().op3
            this.op4 = doc.data().op4
            this.ans = doc.data().ans
          })
        })
      },
      deleteEmployee () {
        if(confirm ('Are you sure?')) {
          db.collection('Questions').where('Q1', '==', this.$route.params.Q1).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push('/Quiz')
            })
          })
        }
      }
    }
  }
</script>
