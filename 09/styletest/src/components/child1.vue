<template>
	<div class="main">
		{{msg}}
		<child11></child11>
		{{msg}}
	</div>
</template>

<script>
	import Child11 from './child11.vue'
	export default {
		name: "child1",
	    components:{Child11},
	    data(){
			return{
				msg:'Child1'
			}
	    }
	}
</script>

<style scoped>
.main{border:1px solid #000;background-color:yellow;}
	.test{padding:10px;text-decoration:underline;border:1px solid #000;}
</style>