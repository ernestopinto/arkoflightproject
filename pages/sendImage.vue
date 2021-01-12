<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
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
        <img width="150px" :src="'https://jaipur-7lpbq.ondigitalocean.app/it/' + responseImageCode">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*
        Defines the data used by the component
      */
  data() {
    return {
      extra: "",
      file: "",
      responseImageCode: ""
    };
  },

  methods: {
    /*
      Submits the file to the server
    */
    async submitFile() {
      /*
              Initialize the form data
          */
      let formData = new FormData();

      /*
          Add the form data we need to submit
      */
      formData.append("file", this.file);
      formData.append("extra", this.extra);

      /*
        Make the request to the POST /single-file URL
      */
      await this.$axios
        .post(process.env.SEND_IMAGES, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(response  =>  {
          console.log(response);
          this.responseImageCode = response.data.data.fileCode;
        })
        .catch(error => {
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
