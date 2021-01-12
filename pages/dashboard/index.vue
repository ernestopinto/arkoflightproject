<template>
  <div>
    <h1>DASHBOARD</h1>
    <p v-if="$fetchState.pending">getting data...</p>
    <div v-else>
      <div>
        <p>User In -> {{ user }}</p>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      user: "",
    };
  },
  async fetch() {
  },
  async mounted() {
    await this.$axios.$get(process.env.USER_INFO).then(r=>{
      this.user = r.data.user.name;
    }).catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>