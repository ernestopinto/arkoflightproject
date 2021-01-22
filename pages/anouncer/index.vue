<template>

  <div style="padding: 40px">
    <ark-image :imageData="this.imageProps" />
    <router-link :to="'/home'"> <<< </router-link>
  </div>
</template>

<script>
import {Helpers} from "@/helpers";
import {ArkServices} from "@/services";
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
    if (!Helpers.isNotNullOrUndifinedOrEmpty(this.$route.hash)){
      this.imageProps.code = Helpers.getHashSlug(this.$route)
    }
    //...group services
    /*if (!Helpers.isNotNullOrUndifinedOrEmpty(this.$route.hash)){
      await new ArkServices(this.$axios).getImageData(Helpers.getHashSlug(this.$route), (response) => {
        this.imageData = response;
      })
    } else {
      this.imageData = {
        code: 0
      }
    }*/
  },
  mounted() {
  },
};
</script>

<style scoped></style>
