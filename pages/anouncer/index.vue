<template>

  <div style="padding: 40px">
    slug : {{imageProps.code}}
    <ark-image :image="imageProps" />
    <router-link :to="'/home'"> <<< </router-link>
  </div>
</template>

<script>
import {Helpers} from "@/helpers";
import {Environment} from "@/env/Environment";


export default {
  name: "index",
  data() {
    return {
      imageData: null,
      imageProps: {
        code: '',
        size: Environment.IMAGES_SIZE.full,
        withImage: 500
      }
    }
  },
  async fetch() {
    this.imageProps.code = Helpers.getHashSlug(this.$route)
    console.log(Helpers.getHashSlug(this.$route));
  },
};
</script>

<style scoped></style>
