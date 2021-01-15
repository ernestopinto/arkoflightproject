<template>
  <div>
    <div v-if="this.$auth.loggedIn">
      <div>
        <button v-on:click="logOut">Logout</button>
      </div>
    </div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  name: "index",
  methods: {
    async logOut() {
      await this.$auth.logout().then(this.$router.push({ path: "/" }));
    },
  },
};
</script>

<style scoped></style>
