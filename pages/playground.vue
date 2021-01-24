<template>
  <div>
    <div>
      <nav-user />
    </div>
    <div>
      Esta Info é uma espécie de FETCH:
      -----------------
      <div>
        <ListImages :images-load="{images: images, mode: this.mode_thumb}" />
      </div>

      -----------------

      <p>{{ this.image }}</p>
    </div>
    <div>
      <b-button v-on:click="getImage('4U3iZWVwXj')" > Ver Anunciante </b-button>
    </div>
  </div>
</template>

<script>
import { ArkServices } from "@/services";
import {Environment} from "@/env/Environment";

export default {
  name: "Playground",
  auth: false,
  data() {
    return {
      mode_thumb: Environment.IMAGES_SIZE.thumb,
      mode_full: Environment.IMAGES_SIZE.full,
      image: null
    }
  },
  methods: {
    async getImage(code){
      this.$store.commit('setProcessing', {loader: true, blocking: false});
      await new ArkServices(this.$axios).getImageData(code, (model) => {
        this.image = model;
        this.$store.commit('setValuePayload', {
          code:3,
          value: 'Ernesto'
        });
        this.$store.commit('setProcessing', {loader: false, blocking: false});
      })
    }
  },
  async asyncData({ $axios }) {
    return {
      images: await new ArkServices($axios)._getImages()
    };
  },
};
</script>

<style scoped></style>
