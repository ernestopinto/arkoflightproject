<template>
  <div >
    <div>
      <label
        >extra
        <input type="text" id="group" name="group" v-model="group" />
      </label>
      <label
        >File
        <input
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
        />
      </label>
      <button v-on:click="submitFile()">Submit</button>
      <div style="max-width: 150px">
        <img v-if="responseImageCode !== ''"
          width="150px"
          :src="
            'https://jaipur-7lpbq.ondigitalocean.app/it/' + responseImageCode
          "
        />
        <p> Code: {{responseImageCode}} </p>
        <router-link :to="'/anouncer/#' + responseImageCode">See Image >>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {ArkServices} from "@/services";

export default {
  name: "sendimages",
  data() {
    return {
      group: "",
      file: "",
      responseImageCode: "",
    };
  },
  methods: {
    /*
      Submits the file to the server
    */
    async submitFile() {
      let formData = new FormData();
      /*
          Add the form data we need to submit
      */
      formData.append("file", this.file);
      formData.append("group", this.group);

      await new ArkServices(this.$axios).sendImageWithData(formData, (response) => {
        this.responseImageCode = response.fileCode;
        this.$store.commit('setPayload', {
          code: 10,
          value: 'reload'
        })
      })

    },

    /*
      Handles a change on the file upload
    */
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped></style>
