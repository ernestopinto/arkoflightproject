<template>
<div>
  <div v-if="this.$auth.loggedIn">
    <h4 v-html="this.$auth.user"></h4>
    <div>
      <button v-on:click="logOut">Logout</button>
    </div>
  </div>
  <div v-else-if="!this.$auth.loggedIn">
    not logged
  </div>
</div>
</template>

<script>
export default {
  name: "nav-user",
  methods: {
    async logOut() {
      await this.$auth.logout();
      await this.$router.push("/login");
    },
  },
  data: () => {
    return {
      user: null
    }
  },
  async fetch() {
    //
  }
}
</script>

<style scoped>

</style>