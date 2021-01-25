<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div>
            <form>
              <input type="text" v-model="imageCode" />

              <b-button v-on:click="getImage(imageCode)">
                Carregar Imagem
              </b-button>
            </form>
          </div>

          <div>
            <p>
              Get Image Info DYNAMIC using store and dynamic fetch inside
              component:
            </p>
            <form>
              <input type="text" v-model="imageCode" />

              <b-button v-on:click="getDynamicImageInfo(imageCode)">
                Carregar Imagem Dynamic</b-button
              >
            </form>
          </div>

          <div style="padding: 40px">
            <ark-image :image="imageasync" />
          </div>

          <hr />

          <div
            style="padding: 40px"
            v-if="image !== null && image !== undefined"
          >
            <ark-image :image="image" />
          </div>

          <p>ArkImage Dynamic:</p>
          <p>
            Get Image Info DYNAMIC using store and dynamic fetch inside
            component:
          </p>

          <hr />

          <div style="padding: 40px">
            <ark-din-image />
          </div>

          <hr />
        </b-col>
        <b-col>

          <div>
            <sendimages />
          </div>

          <div v-if="!$fetchState.pending">
            <div>
              <ListImages
                :images-load="{ images: images, mode: this.mode_thumb }"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ArkServices } from "@/services";
import { Environment } from "@/env/Environment";
import { Helpers } from "@/helpers";

export default {
  name: "Playground",
  auth: false,
  data() {
    return {
      mode_thumb: Environment.IMAGES_SIZE.thumb,
      mode_full: Environment.IMAGES_SIZE.full,
      image: null,
      images: [],
      imageCode: "nylMAPgIMr",
    };
  },
  // this merges 'image' on DOM at once
  async asyncData({ $axios }) {
    return {
      imageasync: await new ArkServices($axios)._getImagesByCode("GlZ9tlEvgN"),
    };
  },
  async fetch() {
    this.$store.watch(
        (state) => {
          return state.transmit; // could also put a Getter here
        },
        (transmit, legacy) => {
          if (
              transmit.fromComponentCode ===
              Environment.COMPONENT_CODES.send_images
          ) {
            this.getAllImages();
          }
        },
        //Optional Deep if you need it
        // deep to next level components?
        {
          deep: true,
        }
    );
    await this.getAllImages();
  },
  methods: {
    getAllImages(){
      new ArkServices(this.$axios).getImages((images) => {
        this.images = images;
      });
    },
    async getImage(code) {
      if (Helpers.isNotNullOrUndifinedOrEmpty(this.imageCode)) {
        this.$store.commit("setProcessing", { loader: true });
        await new ArkServices(this.$axios).getImageData(code, (model) => {
          this.image = { ...model, size: this.mode_full };
          this.$store.commit("setProcessing", { loader: false });
        });
      }
    },
    getDynamicImageInfo(code) {
      if (Helpers.isNotNullOrUndifinedOrEmpty(code)){
        this.$store.commit("transmit", {
          fromComponentCode: Environment.COMPONENT_CODES.playground_arkImage,
          payload: code,
        });
      }
    },
  },
};
</script>

<style scoped></style>
