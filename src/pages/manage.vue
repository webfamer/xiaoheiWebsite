<template>
  <div class="software">
    <div class="software-c">
      <ul class="nav">
        <li>软件列表</li>
        /
        <li>软件汇总</li>
      </ul>
      <div class="title">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
         有事联系酷安昵称：滑稽用户工号9527/wechat:liyini321
        </van-notice-bar>
      </div>
      <div class="searchInput">
        <van-search
          v-model="searchValue"
          shape="round"
          @search="searchList"
          background="#1885A6"
          placeholder="请输入搜索关键词"
        />
      </div>
      <div class="menu" v-for="(item, index) in softwareInfo" :key="index">
        <div class="main">
          <div class="menu-l">
            <img width="128px" height="128px" v-lazy="item.img" />
          </div>
          <div class="menu-r">
            <h3>{{ item.name }}</h3>
            <p>
              {{ item.description }}
            </p>
            <p>
              开发者：<van-button type="primary" size="mini"
                >滑稽用户9527</van-button
              >
            </p>
          </div>
        </div>
        <div class="downsoft" @click="downsoftware(item)">
          立即下载
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {addSoftware} from "../api/api";
import softwareJson from "../api/software";
export default {
  data() {
    return {
      softwareInfo: [],
      searchValue: "",
    };
  },
  methods: {
    getSoftware() {
      this.softwareInfo = softwareJson;
    },
    downsoftware(data) {
    //  addSoftware({data:data})
    },
    searchList(val) {
    this.softwareInfo = softwareJson.filter((item) => {
       let newName = item.name.trim();
       return newName.match(val)
      });
    },
  },

  created() {
    this.getSoftware();
  },
};
</script>

<style scoped lang="scss">
.software {
  background: #f0f3f4;
  .software-c {
    margin: 0 auto;
    width: 345px;
  }
  .nav {
    background: #fff;
    height: 36px;
    color: #777;
    border-radius: 10px;
    text-align: left;
    box-sizing: border-box;
    font-size: 14px;
    padding: 8px;
    li {
      display: inline;
    }
  }
  .title {
    background: #fff;
    border-radius: 10px;
  }
  .menu {
    margin-top: 15px;
    min-height: 168px;
    .main {
      background: #fff;
      padding-left: 20px;
      display: flex;
      min-height: 160px;
      border-radius: 10px 10px 0px 0px;
      align-items: center;
      .menu-l {
        padding-right: 15px;
      }
      .menu-r {
        h3 {
          margin: 0 0 12px;
          font-size: 18px;
          line-height: 1.3;
          text-align: left;
        }
        p {
          text-align: left;
          width: 157px;
          margin: 0 0 10px;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
    .downsoft {
      padding: 12px 20px;
      background-color: #1885a6;
      overflow: hidden;
      border-radius: 0px 0px 12px 12px;
      font-weight: 700;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
