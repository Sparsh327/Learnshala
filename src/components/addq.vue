<template>
  <div class="container">
    <h3>New Question</h3>
    <div class="row">
    <form @submit.prevent="saveEmployee">
      <div >
        <div >
          <input type="text" v-model="Q1" required>
          <label>Question</label>
        </div>
      </div>
      <div >
        <div >
          <input type="text" v-model="op1" required>
          <label>option 1</label>
        </div>
      </div>
      <div >
        <div >
          <input type="text" v-model="op2" required>
          <label>option 2</label>
        </div>
      </div>
      <div >
        <div>
          <input type="text" v-model="op3" required>
          <label>option 3</label>
        </div>
        <div >
            <div>
                <input type="text" v-model="op4" required>
                <label>option 4</label>
            </div>
        </div>
        <div >
            <div>
                <input type="text" v-model="ans" required>
                <label >answer</label>
            </div>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/Quiz" >Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
      name: 'addq',
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
      methods: {
        saveEmployee () {
          db.collection('Questions').add({
            Q1: this.Q1,
            op1: this.op1,
            op2: this.op2,
            op3: this.op3,
            op4: this.op4,
            ans: this.ans
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/Quiz')
          })
          .catch(error => {
            console.error('Error adding question: ', error)
          })
        }
      }
    }
</script>