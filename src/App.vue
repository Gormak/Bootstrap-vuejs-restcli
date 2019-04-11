<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
	import axios from 'axios'
    export default {
        name: 'App',
        data() {
            return {
				authenticated: false
			}
        },
        mounted() {
			if(localStorage.getItem('authenticated') == '1'){
				axios.get('http://192.168.55.55/api/v1/check?token='+localStorage.getItem('storedData'))
				.then(response => { 
					localStorage.setItem('authenticated', '1')
					this.authenticated = true
				}).catch(error => {
					console.log(error)
					this.authenticated = false
					localStorage.setItem('authenticated', '0')
					this.$router.replace({ name: 'login' })
				})
			}
        },
        methods: {
			setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
				this.authenticated = false
                localStorage.setItem('authenticated', '0')
            },
			goBack () {
			  window.history.length > 1
				? this.$router.go(-1)
				: this.$router.push('/')
			}
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>