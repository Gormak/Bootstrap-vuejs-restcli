<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" required placeholder="E-mail" />
        <input type="password" name="password" v-model="input.password" required placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        axios.post('http://192.168.55.55/auth/login', {email: this.input.username, password: this.input.password})
        .then(response => { 
			localStorage.setItem('storedData', response.data.token)
			localStorage.setItem('authenticated', '1')
			this.$emit("authenticated", true);
            this.$router.replace({ name: 'hello' })
			console.log(response.data.token)
		}).catch(error => {
			console.log(error)
		})
      } else {
	    console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>