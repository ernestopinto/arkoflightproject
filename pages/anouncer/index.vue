<template>

  <div style="padding: 40px">
    <img v-if="!$fetchState.pending && this.imageData.code !== 0"
      width="600px"
      v-bind:src="'https://jaipur-7lpbq.ondigitalocean.app/it/' + this.imageData.code"
     alt="imagem"/>
    <br />
    <router-link :to="'/home'"> <<< </router-link>
  </div>
</template>

<script>
import {Helpers} from "@/helpers";
import {ArkServices} from "@/services";


export default {
  name: "index",
  data() {
    return {
      imageData: null
    }
  },
  async fetch() {
    if (!Helpers.isNotNullOrUndifinedOrEmpty(this.$route.hash)){
      await new ArkServices(this.$axios).getImageData(Helpers.getHashSlug(this.$route), (response) => {
        this.imageData = response;
      })
    } else {
      this.imageData = {
        code: 0
      }
    }
  },
  mounted() {},
};
</script>

<style scoped></style>
