<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	
	<p>{{ result }}</p>
	<p><qrcode-vue v-if="value !== ''" :value="value" :size="size" level="H"></qrcode-vue></p>
	
    <p id="home" class="active">
		<b-button v-b-modal.popupSession>Join the session (Team member)</b-button>
		<b-button v-b-modal.popupJoin>New Session (Coach)</b-button>
		<b-button v-b-modal.popupResults>Show results</b-button>
	</p>
	
	<b-modal id="popupJoin" title="Give a name to your team :" @ok="handleJoin">
		<form @submit.stop.prevent="handleSubmit">
			<b-form-input id="join" v-model="join" required placeholder="Team name"></b-form-input>
		</form>
	</b-modal>
	
	<b-modal id="popupSession" title="Enter the session token :" @ok="handleSession">
		<form @submit.stop.prevent="handleSubmit">
			<b-form-input id="session" v-model="session" required placeholder="Token"></b-form-input>
		</form>
	</b-modal>
	
	<b-modal id="popupResults" title="Enter the session token :" @ok="handleResult">
		<form @submit.stop.prevent="handleSubmit">
			<b-form-input id="result" v-model="result" required placeholder="Token"></b-form-input>
		</form>
	</b-modal>
	
  </div>
</template>

<script>
import axios from 'axios'
import QrcodeVue from 'qrcode.vue';

export default {
  name: 'hello',
  data () {
    return {
		join: '',
		session: '',
		result: '',
		msg: 'Welcome !',
		result: '',
		value: '',
		size: 250
    }
  },
  methods: {
	handleJoin(evt) {
		//evt.preventDefault()
		if (!this.join) {
		  alert('Please enter your name')
		} else {
		  this.handleSubmit('join')
		}
    },
	handleSession(evt) {
		if (!this.session) {
		  alert('Please enter your token')
		} else {
		  this.handleSubmit('session')
		}
	},
	handleResult(evt) {
		if (!this.result) {
		  alert('Please enter your token')
		} else {
		  this.handleSubmit('result')
		}
	},
	handleSubmit(send) {
		localStorage.setItem('page', 'hello')
		if(send == 'join') {
			if(localStorage.getItem('authenticated') == 0) {
				this.$router.replace({ name: "login" })
			} else {
				axios.post('http://192.168.55.55/api/v1/sessions?token='+localStorage.getItem('storedData'), {name: this.join})
				.then(response => (
					this.result = 'The token acces for the team '+response.data.name+' is: '+response.data.session_key, 
					this.value = document.location.origin+'/'+response.data.session_key))
			}
		}
		else if(send == 'session') {
			if(localStorage.getItem('authenticated') == 0) {
				this.$router.replace({ name: "login" })
			} else {
				this.$router.push({ path: 'session', query: { token: this.session } })
			}
		}
		else if(send == 'result') this.msg = 'result'
		else this.msg = 'none'
	}
  },
  components: {
    QrcodeVue
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
