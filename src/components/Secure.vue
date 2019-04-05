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
			this.$router.replace({ name: "login" });
		}
	  }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>