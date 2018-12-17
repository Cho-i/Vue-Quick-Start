<template>
	<div id="todolistapp">
		<div id="header" class="header">
			<h2>Todo List App</h2>
			<input-todo></input-todo>
		</div>
		<list></list>
	</div>
</template>

<script>
	import InputTodo from './InputTodo.vue';
	import List from './List.vue';
	export default {
		name: "todo-list",
	    components:{InputTodo, List}
	}
</script>

<style scoped>
	*{box-sizing:border-box;}
	.header{background-color:lightskyblue;padding:30px;color:hotpink;text-align:center;}
	.header:after{content:'';display:table;clear:both;}
</style>