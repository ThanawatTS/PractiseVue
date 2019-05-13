<template>
    <header class="header">
    <b-navbar toggleable="lg" type="dark" >
    <b-navbar-brand>
        <router-link to='/'>
       <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
       LearnDina
       </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item >PARTNER</b-nav-item>
        <b-nav-item > <router-link to='/blog'>BLOG</router-link></b-nav-item>
        <b-nav-item > <router-link to='podcast'>PODCAST</router-link></b-nav-item>
        <b-nav-item class="topbar-section"></b-nav-item>
        <b-button id="btn-login" size="sm" class="my-2 my-sm-0">Login</b-button>
        <b-nav-item></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scope>
  .header {
    background: crimson;
  }

  .topbar-section {
    margin-left: 5%;
    border-left: 2px #cccccc solid;
  }

  @media only screen and (max-width: 990px) {
  .header {
    background: blue;
  }

  .topbar-section {
    border-left: 0px #cccccc solid;
  }

  }


</style>
