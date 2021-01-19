<template>
  <div>
    <nav-user />
      <img
        width="150"
        src="https://jaipur-7lpbq.ondigitalocean.app/it/XzqJz7xvi5"
      />
        <p>API Info -> {{ response.message }}</p>
        <p>Message -> {{ response.data.api_version }}</p>
        <p>Id -> {{ response.id }}</p>
      <br />
      <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
import { ApiEndPoints } from "@/env/Environment";
import axios from "@/plugins/axios";

export default {
  name: "index",
  data() {
    return {
      id: null,
      apiInfo: "",
      message: "",
    };
  },
  methods: {},
  async subscriptions() {},
  /*async fetch(params) {
    await this.$axios
        .$get(ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.apiInfo))
        .then((response) => {
          this.message = response.message;
          this.apiInfo = response.data.api_version;
        })
        .catch((error) => {});
  },*/
  // this os after the DOM is ready...
  async asyncData({ params, $axios }) {
    const response = await $axios
      .$get(ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.apiInfo))
      .catch((error) => {});
    response.id = params.id;
    return { response };
  },
};
</script>

<style scoped></style>
