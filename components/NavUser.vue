<template>
  <div>
    <div v-if="this.$store.state.payload.code !== 0">
     Value: {{this.$store.state.payload.value}}
    </div>
    ***{{this.$store.state.processing.loader}}****
    <span v-if="this.$store.state.processing.loader"> ...processing</span>
    <div v-if="this.$auth.loggedIn">
      <button v-on:click="logOut">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavUser",
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
  mounted() {
  }
};
</script>

<style scoped></style>
