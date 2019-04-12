<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>
    </div>
</template>

<script>
	import axios from 'axios'
    export default {
      name: 'Secure',
      data () {
        return {}
      },
	  mounted () {
		if(localStorage.getItem('authenticated') == 0) {
			localStorage.setItem('page', 'secure')
			this.$router.replace({ name: "login" });
		}
	  }
    }
</script>

<style scoped>
    #secure {
	
    }
</style>