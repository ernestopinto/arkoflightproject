<template>
  <div >
    <div>
      <label
        >extra
        <input type="text" id="extra" name="extra" v-model="extra" />
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
        <img
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
import {ApiEndPoints} from "@/env/Environment";

export default {
  name: "sendimages",
  data() {
    return {
      extra: "",
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
      formData.append("extra", this.extra);
      await this.$axios
        .post(
          ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.sendImage),
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.responseImageCode = response.data.data.fileCode;
        })
        .catch((error) => {
          console.log(error);
        });
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
