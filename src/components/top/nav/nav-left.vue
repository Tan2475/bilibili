<template>
  <div class="nav-left">
      <ul>
          <li>
            <a href="#" title="首页" class="t">
                <i class="home"></i>
              <span>首页</span>
            </a>
          </li>
          <li v-for="navLink in links " :key="navLink.id" :title="navLink.txt">
              <a href="#">{{navLink.txt}}</a>
              <div class="temp" v-if="navLink.mode">
                 <component :is="navLink.comp"></component>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import game from "./frame/game"
import live from "./frame/live"
import mobile from "./frame/mobile"

export default {
  name: "navLeft",
  data() {
    return {
      links: [
          {txt:"画友",},
          {txt:"游戏中心",mode:true,comp:"game"},
          {txt:"直播",mode:true,comp:"live"},
          {txt:"会员购",},
          {txt:"周边", },
          {txt:"移动端",mode:true,comp:"mobile"}],
    };
  },
  components:{
      game,live,mobile
  }
};
</script>

<style lang="scss"  >
ul {
  list-style: none;
  display: flex;
  width: 380px;
  li {
    position:relative;
    flex: 1 0 auto;
    text-align: center;
    line-height: 42px;
    &:hover{background:rgba(255, 255, 255, 0.4);
        .temp{
            display: block;
        }
    }
    a:link,
    a:visited {
      color: #333;
    }
    .t {
      display: flex;
      align-items: center;
      justify-content:center;
      width:100%;
      height:100%;
      .home {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../../../assets/img/icons.png") no-repeat;
        background-position: -600px -1045px;
        margin: {
          bottom: 4px;
          right: 4px;
        }
      }
    }
    .temp {
      position:absolute;
      display:none;
      z-index:10;
    }
  }
}
</style>

