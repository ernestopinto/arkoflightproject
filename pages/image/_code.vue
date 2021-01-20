<template>
  <div>
    <nav-user />
    <div style="padding: 40px">
      <img
        width="600px"
        v-bind:src="
          'https://jaipur-7lpbq.ondigitalocean.app/if/' + response.code
        "
      />
      <br />
      <div>
        <p>
          {{ response.data.name }}
        </p>
        <p>size : {{ response.data.size }} Mb</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiEndPoints } from "@/env/Environment";
import axios from "@/plugins/axios";

export default {
  name: "_code",
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
      .$get(
        ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.getImageByCode) +
          `/${params.code}`
      )
      .catch((error) => {
        console.log(error);
      });
    response.code = params.code;
    return { response };
  },
};
</script>

<style scoped></style>
