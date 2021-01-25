<template>
  <div>
    <nav-user />
    <h1>Dashboard - {{ this.$store.state.auth.user.name }}</h1>
    <div>
      <sendimages />
    </div>

    <div v-if="$fetchState.pending">
      <h1><b>loading...</b></h1>
    </div>
    <div v-if="!$fetchState.pending">
      <div>
        <ListImages :images-load="{ images: images, mode: this.mode_thumb }" />
      </div>
    </div>
  </div>
</template>

<script>
import { ArkServices } from "@/services";
import { Environment } from "@/env/Environment";

export default {
  imageInfo: null,
  name: "index",
  data() {
    return {
      images: [],
      sizeImages: Environment.IMAGES_SIZE.thumb,
      mode_thumb: Environment.IMAGES_SIZE.thumb,
    };
  },
  mounted() {
    this.$store.watch(
      (state) => {
        return state.transmit; // could also put a Getter here
      },
      (transmit, legacy) => {
        //something changed do something
        if (
          transmit.fromComponentCode === Environment.COMPONENT_CODES.send_images &&
          transmit.payload === Environment.OP_CODES.refresh
        ) {
          this.$fetch();
        }
      },
      //Optional Deep if you need it
      {
        deep: true,
      }
    );
  },
  methods: {},
  async fetch() {
    await new ArkServices(this.$axios).getImages((response) => {
      this.images = response;
      this.$store.commit("setPayload", {
        code: 0,
        value: "ready",
      });
    });
  },
};
</script>

<style scoped></style>
