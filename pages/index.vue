<template>
  <div class="container">
    <div>
      <div>
        <client-only>
          <div v-if="this.$auth.loggedIn">
            <p>{{ this.$auth.user.name }}</p><br/>
            <button v-on:click="logOut">Logout</button>
          </div>
        </client-only>
      </div>
      <Logo />
      <h1 class="title">Arcadeluz</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <br/>
      <div v-if="!this.$auth.loggedIn">
        <Login/>
        <br/>
        <Register/>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import VueRx from 'vue-rx'

Vue.use(VueRx);

export default {
  auth: false,
  name: "index",
  methods: {
    async logOut() {
      await this.$auth.logout().then(this.$router.push({ path: "/" }));
    },
  }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
