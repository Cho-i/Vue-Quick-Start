<template>
	<div id="app">
		<layout>
			<h1 slot="header">header area</h1>
			<div slot="sidebar">
				<ul class="menu">
					<li v-for="sidebar in sidebars" :key="sidebar.menu">
						<a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
					</li>
				</ul>
			</div>
			<div slot="content">
				<h2>content area</h2>
				<p>abcdefg...</p>
				<p>abcdefg...</p>
				<p>abcdefg...</p>
				<p>abcdefg...</p>
			</div>
			<p slot="footer">Footer text</p>
		</layout>
	</div>
</template>

<script>
	import Layout from './components/NamedSlot.vue'
	export default {
		data(){
			return{
				sidebars:[
				  {menu:"Home", link:"#"},
				  {menu:"About", link:"#"},
				  {menu:"Contact", link:"#"},
				  {menu:"Vue.js", link:"#"}
				]
			}
		},
	    components:{Layout}
	}
</script>

<style scoped>
	ul.menu{position:relative;padding:5px;list-style:none;font-style:italic;}
	ul.menu a{text-decoration:none;}
</style>