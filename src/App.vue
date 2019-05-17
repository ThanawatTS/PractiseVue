<template>
  <div id="app">
    <v-app id="inspire" >
    <Header />
    <router-view/>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
