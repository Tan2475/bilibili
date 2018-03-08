<template>
  <div class="primary">
    <div class="wrap">
      <div class="menu-list">
        <ul >
          <li v-for="menu in menus" :key="menu.id" >
            <a href="#" >
              <div class="icons" v-if="menu.num">
                <span>{{menu.num}}</span>
              </div> 
              <div class="icons" v-else>
                <div class="picture" :class="menu.bg" ></div>
              </div>
              <div class="title">{{menu.txt}}</div>
            </a>
          </li>
        </ul>
      </div>
      <div class="gif-menu">
        <img src="//i2.hdslb.com/bfs/active/2b1a9d34de4031aa40c69324d999912669527383.gif">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "primary",
  data() {
    return {
      menus: [
        { txt: "首页", bg: { iconHome: true } },
        { txt: "动画", num: "999+" },
        { txt: "番剧", num: "999+" },
        { txt: "国创", num: "999+" },
        { txt: "音乐", num: "999+" },
        { txt: "舞蹈", num: "999+" },
        { txt: "游戏", num: "999+" },
        { txt: "科技", num: "999+" },
        { txt: "生活", num: "999+" },
        { txt: "鬼畜", num: "999+" },
        { txt: "时尚", num: "999+" },
        { txt: "广告", num: "999+" },
        { txt: "娱乐", num: "365" },
        { txt: "影视", num: "255" },
        { txt: "放映厅", num: "999+" },
        { txt: "专栏", bg: { iconZhuanlan: true } },
        { txt: "广场", bg: { iconSquare: true } },
        { txt: "直播", bg: { iconLive: true } },
        { txt: "小黑屋", bg: { iconBlackroom: true } }
      ]
    };
  }
  
};
</script>

<style lang="scss">
.primary {
  height: 58px;
  .wrap {
    width: 1160px;
    height: 58px;
    margin: 0 auto;
    .menu-list {
      float:left;
      height: 58px;
      display: flex;
      align-items: center;
      width: 1076px;
      font-size: 12px;
      ul {
        width:100%;
        li {
          width: 5.2%;
          line-height: 20px;
          a {
            .icons {
              span {
                padding: 1px 3px;
                color:#fff;
                background: #ffafc9;
                border-radius: 3px;
              }
              .picture {
                margin: 0 auto;
                width: 20px;
                height: 20px;
                background: url("../../../assets/img/icons.png") no-repeat;
              }
              .iconHome {
                background-position: -662px -1173px;
              }
              .iconZhuanlan {
                background-position: -87px -1814px;
              }
              .iconLive {
                background-position: -87px -1878px;
              }
              .iconSquare {
                background-position: -87px -2006px;
              }
              .iconBlackroom {
                background-position: -87px -1942px;
              }
            }
            .title {
              color: #333;
            }
          }
        }
      }
    }
    .gif-menu{
      height:100%;
      float:right;
      img{
        width:69px;
        margin:6px auto;
      }
    }
  }
}
</style>

