<template>
    <div id="session">
        
		<b-collapse visible id="start">
			<h1>Session</h1>
			<b-button v-b-toggle.start.question>Start</b-button>
		</b-collapse>
		
		<b-collapse id="question">
			<h1>{{ title }}</h1>
			<p>
				<b-img :src="'./static/'+image"></b-img>
			</p>
			<div>
		    	<div>
					<b-img src="./static/green_light.png"></b-img>
				</div>
				<div>
					<span>{{ first }}</span>
				</div>
			</div>
			<div>
				<div>
					<b-img src="./static/red_light.png"></b-img>
				</div>
				<div>
					<span>{{ second }}</span>
				</div>
			</div>
			<div>
				<b-button variant="success" value="2" v-on:click="start()">Green</b-button>
				<b-button variant="warning" value="1" v-on:click="start()">Orange</b-button>
				<b-button variant="danger" value="0" v-on:click="start()">Red</b-button>
				{{card}}
			</div>
		</b-collapse>
		
		
		
		
		
    </div>
</template>

<script>
	import axios from 'axios'
    export default {
      name: 'Session',
      data () {
        return {
			//test: this.$route.query.token,
			card: 1,
			title: 'Delivering Value',
			image: 'delivering_value.jpg',
			first: "We deliver great stuff! We're proud of it and our stakeholders are really happy.",
			second: "We deliver crap. We feel ashamed to deliver it. Our stakeholders hate us."
		}
      },
	  mounted () {
		if(!this.$route.query.token) {
			this.$router.replace({ name: "hello" })
		}
		if(localStorage.getItem('authenticated') == 0) {
			localStorage.setItem('page', 'session')
			this.$router.replace({ name: "login" })
		}
	  },
	  methods: {
		start () {
			if(this.card == 1) {
				this.title = 'Easy to release',
				this.image = 'easy_release.jpg',
				this.first = "Releasing is simple, safe, painless and mostly automated.",
				this.second = "Releasing is risky, painful, lots of manual work and takes forever."
				this.card += 1
			}
		}
	  }
    }
</script>

<style scoped>
    #session {
		
    }
</style>