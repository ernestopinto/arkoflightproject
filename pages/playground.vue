<template>
  <div>
    <div>
      <nav-user />
    </div>
    <div>
      <b-button v-on:click="getImage('4U3iZWVwXj')" > Ver Anunciante e Refresh </b-button>
    </div>
    <div>
      <div v-if="$fetchState.pending">
        getting images....
      </div>
      <div>
        <ListImages :images-load="{images: images, mode: this.mode_thumb}" />
      </div>
      <div>
        Esta info vem merged através do hook asyncData
      </div>
      <div>
        <ArkImage :image-data="image"/>
      </div>
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
      images: []
    }
  },
  // this merges 'image' on DOM at once
  async asyncData({ $axios }) {
    return {
      image: await new ArkServices($axios)._getImagesByCode('4U3iZWVwXj')
    };
  },
  // this data must rely on data vars
  fetch() {
    new ArkServices(this.$axios).getImages((images) => {
      this.images = images;
      // state back to ready!...
      this.$store.commit('setValuePayload', {
        // store comes back to default ready
        code:Environment.OP_CODES.ready,
      });
    })
  },
  mounted() {
    this.$store.watch(
        (state) => {
          return this.$store.state.payload.code; // could also put a Getter here
        },
        (newValue, oldValue) => {
          //something changed do something
          //store changes to code refresh
          if (newValue === Environment.OP_CODES.refresh) {
            this.$fetch();
          }
        },
        //Optional Deep if you need it
        {
          deep: true,
        }
    );
  },
  methods: {
    async getImage(code){
      this.$store.commit('setProcessing', {loader: true, blocking: false});
      await new ArkServices(this.$axios).getImageData(code, (model) => {
        this.image = model;
        // store comes back to default ready
        this.$store.commit('setValuePayload', {
          code:Environment.OP_CODES.refresh,
        });
        this.$store.commit('setProcessing', {loader: false, blocking: false});
      })
    }
  }
};
</script>

<style scoped></style>
