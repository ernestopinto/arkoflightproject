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
    <p>cenas -> {{ cenas }}</p>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      ip: null,
      apiInfo: "",
      message: "",
      cenas: 0
    };
  },
  async fetch() {
    let data = await this.$axios
      .$get("/apiinfo");
    this.apiInfo = data.data.api_version;
    this.message = data.message;
  },
  // this os after the DOM is ready...
  mounted() {
    this.cenas = this.message + " !!";
  },
};
</script>

<style scoped></style>
