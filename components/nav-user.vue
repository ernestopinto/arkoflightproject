<template>
  <div v-if="this.$auth.loggedIn">
    <button v-on:click="logOut">Logout</button>
  </div>
</template>

<script>
export default {
  name: "nav-user",
  methods: {
    async logOut() {
      await this.$auth.logout().then(this.$router.push({ path: "/" }));
    },
  },
  data: () => {
    return {
      user: null,
    };
  },
  async fetch() {
    //
  },
};
</script>

<style scoped></style>
