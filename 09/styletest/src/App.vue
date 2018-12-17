<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <child1></child1>
    <child2></child2>
	  <module1></module1>
  </div>
</template>

<script>
import child1 from './components/child1.vue'
import child2 from './components/child2.vue'
import module1 from './components/Module1.vue'

export default {
  name: 'app',
  components: {child1,child2,module1},
  data(){
  	return{
  		msg:'Welcome to Youer Vue.js'
    }
  }
}
</script>

<style>

</style>
