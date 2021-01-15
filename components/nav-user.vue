<template>
<div>
  <div v-if="this.$auth.loggedIn">
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
      await this.$auth.logout().then(
          this.$router.push({ path: '/login' })
      );
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