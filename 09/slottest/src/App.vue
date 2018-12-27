<template>
	<div id="app">
		<speech-box :headerText="A.header" :footerText="A.footer">
			<div>
				<p>{{A.message}}</p>
			</div>
		</speech-box>
		<speech-box class="sanders" :headerText="B.header" :footerText="B.footer">
		<div>
			<p class="sanders-content">{{B.message}}</p>
		</div>
		</speech-box>
	</div>
</template>

<script>
import SpeechBox from './components/SpeechBox.vue'

export default {
	name:'app',
    components:{SpeechBox},
    data:function(){
		return{
			A:{
				header:"A header",
			    footer:"A footer",
			    message:"A message..."
			},
		    B:{
				header:"B header",
		        footer:"B footer",
		        message:"B message..."
		    }
		}
    }
}
</script>

<style scoped>
	.sanders{background-color:antiquewhite;}
	.sanders-content{text-decoration:underline;}

</style>
