<template>
	<div id="app">
		<div class="container">
			<div class="form-group">
				<button @click="fetchContacts">1페이지 연락처 조회</button>
			</div>
			<div class="form-group">
				<input type="text" v-model="name" placeholder="이름을 입력합니다.">
				<input type="text" v-model="tel" placeholder="전화번호를 입력합니다.">
				<input type="text" v-model="address" placeholder="주소를 입력합니다.">
				<button @click="addContact"></button>
			</div>
			<div class="form-group">
				<input type="text" v-model="no">
				<button @click="fetchContactOne">연락처 1건 조회</button>
			</div>
			<div class="form-group">
				<input type="text" v-model="no">
				<input type="text" v-model="name" placeholder="이름을 입력합니다.">
				<input type="text" v-model="tel" placeholder="전화번호를 입력합니다.">
				<input type="text" v-model="address" placeholder="주소를 입력합니다.">
				<button @click="updateContact">수정</button>
			</div>
			<div class="form-group">
				<input type="text" v-model="no">
				<button @click="deleteContact">삭제</button>
			</div>
			<div class="form-group">
				<input type="text" v-model="no">
				<input type="file" ref="photofile" name="photo">
				<button @click="changePhoto">파일변경</button>
			</div>
		</div>
		<span>JSON 출력</span>
		<div id="result" class="container">
			<xmp>{{result}}</xmp>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
	  name: "app",
	  data(){
	  	return{
		  no:0, name:'',tel:'',address:'',
		  result:null
	    }
	  },
	  methods:{
	  	fetchContacts:function(){

	    },
	    addContact:function(){

	    },
	    fetchContactOne:function(){

	    },
		updateContact:function(){

		},
	    deleteContact:function(){

	    },
	    changePhoto:function(){

	    }
	  }
	}
</script>

<style scoped>

</style>