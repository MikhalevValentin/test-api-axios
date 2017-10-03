<template>
  <div id="app">
  	<!-- the router outlet, where all matched components would ber viewed -->
  	<router-link v-bind:to="'/'">Home</router-link>
	 <router-link v-bind:to="'/example'">Example</router-link>
	 <router-link v-bind:to="'/empire'">Swapi</router-link>
    <router-link v-bind:to="'/people'">People</router-link>
    <router-link v-bind:to="'/film'">Film</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import 'styles/main.scss'
</style>
