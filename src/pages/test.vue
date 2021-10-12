<template>
  <div></div>
</template>

<script>
import softwareJson from "../api/software";
export default {
  data() {
    return {
      softwareInfo: [],
    };
  },
  methods: {
    getSoftware() {
      this.softwareInfo = softwareJson;
      console.log(this.softwareInfo, "function");
    },
  },
  created () {
       this.getSoftware();
  },
};
</script>

<style>
</style>