<template>
  <div class="home">
    <h1> Admin </h1>
    <div class="btn-selected">
      <router-link to="/blog"> <b-button id="btn-blog" size="lg">Blog</b-button> </router-link>
      <router-link to="/adminpodcast"> <b-button id="btn-podcast" size="lg">Podcast</b-button> </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {

    }
  }
}
</script>

<style scope>

  #btn-blog {
    margin: 2.5%;
  }

  #btn-podcast {
    margin: 2.5%;
  }

  .home {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    text-align: center;
  }

</style>

