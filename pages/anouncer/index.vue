<template>
  <div style="padding: 40px">
    <img v-if="!$fetchState.pending"
      width="600px"
      v-bind:src="'https://jaipur-7lpbq.ondigitalocean.app/if/' + response.data.code"
    />
    <br />
  </div>
</template>

<script>
import { ApiEndPoints } from "@/env/Environment";

export default {
  name: "index",
  data() {
    return {
      teste: null,
      response: null,
    };
  },
  async fetch() {
    console.log("slug -> ",this.$route.hash.split("#")[1]);
    await this.$axios
      .$get(
        ApiEndPoints.endpoints.getImageByCode +
          `/${this.$route.hash.split("#")[1]}`
      )
      .then((response) => {
        this.response = response;
        console.log(this.response);
        this.message = response.message;
        this.apiInfo = response.data.api_version;
      })
      .catch((error) => {});
  },
  mounted() {},
};
</script>

<style scoped></style>
