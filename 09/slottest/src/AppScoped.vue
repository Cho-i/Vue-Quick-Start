<template>
	<div class="parent">
		<child>
			<template slot="type1" scope="p1">
				<div>{{P1.cx}}+{{p1.cy}} = {{parseInt(p1.cx)+parseInt(p1.cy)}}</div>
			</template>
			<template slot="type2" scope="p2">
				<div>{{p2.cx}} 더하기 {{p2.cy}}는 {{parseInt(p2.cx)+parseInt(p2.cy)}}입니다.</div>
			</template>
		</child>
	</div>
</template>

<script>
	import Child from './components/ScopedSlot.vue'
	export default {
		components:{Child}
	}
</script>

<style scoped>
.parent{border:2px dashed #000;padding:5px;}
</style>