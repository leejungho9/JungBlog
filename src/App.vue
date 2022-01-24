<template>
<Navbar/>
<router-view :posts="posts" :view="view" @count = "clickitem = $evnet"/>
</template>

<script>
import post from './assets/blog.js'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  data() {
    return { 
      posts: post,
    }
  },
  components: {
    Navbar  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
