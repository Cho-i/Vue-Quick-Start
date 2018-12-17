<template>
	<div>
		<button :class="$style.hand">CSS Module을 적용한 버튼</button>
	</div>
</template>

<script>
	export default {
		name: "Module1",
	    created(){
			console.log(this.$style);
	    }
	}
</script>

<style module>
.hand{cursor:pointer;background-color:plum;color:yellow;}
</style>