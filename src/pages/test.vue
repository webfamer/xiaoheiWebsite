<template>
  <div>
    <button @click="startAdd">点我开始</button>
  </div>
</template>

<script>
import softwareJson from "../api/newSoftware";
import { addSoftwareApi } from "@/api/api";
export default {
  data() {
    return {
      softwareInfo: [],
    };
  },
  methods: {
    getSoftware() {
      this.softwareInfo = softwareJson.reverse();
      console.log(this.softwareInfo, "function");
    },
    addSoftWare(data) {
      return addSoftwareApi({
        name: data.name,
        logo: data.img,
        downloadUrl: decodeURI(encodeURI(data.downloanUrl).replace(/(%E2%80%8C)(\w\W)*/g, '$2')),
        description: data.description,
      });
    },
    startAdd() {
      let data = this.softwareInfo;
      let i = 124;
      let result = true;
    let timer = setInterval( async () => {
        if(i>=data.length){
          clearInterval(timer);
        }
         result = await this.addSoftWare(data[i])
        if (result.success) {
          i++;
          result = result.success;
        }else{
          console.log(i, "失败的原因");
           clearInterval(timer);
        }

      }, 2000);
    },
  },
  created() {
    this.getSoftware();
  },
};
</script>

<style>
</style>