<template>
  <div>
    <p v-if="$fetchState.pending">getting data...</p>
    <div v-else>
      <img
        width="150"
        src="https://jaipur-7lpbq.ondigitalocean.app/it/XzqJz7xvi5"
      />
      <div>
        <p>API Info -> {{ apiInfo }}</p>
        <p>Message -> {{ message }}</p>
      </div>
      <br />
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  name: "index",
  data() {
    return {
      ip: null,
      apiInfo: "",
      message: "",
      cenas: 0,
    };
  },
  async subscriptions() {},
  async fetch() {
    await this.$axios
        .$get(process.env.API_INFO)
        .then((response) => {
          this.message = response.message;
          this.apiInfo = response.data.api_version;
        })
        .catch((error) => {});
  },
  // this os after the DOM is ready...
  async asyncData() {
    //
  },
};
</script>

<style scoped></style>
