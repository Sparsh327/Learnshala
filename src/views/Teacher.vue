<template>
    <div class="container">
        
        <Dashboard msg= "Teacher's Dashboard " />
        <h1>Time Table</h1>
        <div class="jumbotron"></div>
    </div>
</template>

<script>
import Dashboard from '@/components/dashboard.vue'
export default {
    name: 'teach',
    components:{
        Dashboard
    }
}
</script>