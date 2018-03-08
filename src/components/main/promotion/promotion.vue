<template>
  <div class="promotion">
      <div class="pro-top">
          <div class="top-title">
              <i class="icon"></i>
              <span>推广</span>
          </div>
          <div class="top-online">
              <a href="#">在线人数：2258645</a>
              <i class="dividers"></i>
              <a href="#">最新投稿：17234</a>
          </div>
      </div>
      <div class="pro-foot">
          <div class="foot-left">
              <promotion-card v-for="(item,index) in 5" :key="index"></promotion-card>
          </div>
          <div class="foot-right">
            <img src="https://i0.hdslb.com/bfs/archive/6ab354638e7f7cad857db2866cb4c4c00733e369.jpg" alt="专题图">
          </div>
      </div>
  </div>
</template>


<script>
import promotionCard from "./PromotionCard";

export default {
  name: "promotion",
  data() {
    return {};
  },
  components: { promotionCard }
};
</script>


<style lang="scss" scoped>
@import "../../../assets/scss/base.scss";

.promotion {
  @include size(203px,100%);
  padding-bottom: 15px;
  //头部样式
  .pro-top {
    @include size(34px,100%);
    padding-bottom: 15px;
    display: flex;
    .top-title {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        @include size(40px,40px);
        background: url("../../../assets/img/icons.png");
        background-position: -141px -75px;
        padding-right: 10px;
      }
      span {
        font-size: 24px;
      }
    }
    .top-online {
      @include size(100%,260px);
      background: #e5e9ef;
      border-radius: 4px;
      @include flexStyle(space-around,center);
      a {
        font-size: 12px;
        &:visited {
          color: #6d757a;
        }
        &:hover {
          color: #00a1d6;
        }
      }
      .dividers {
        display: inline-block;
        @include size(12px,1px);
        background: #a8afb4;
      }
    }
  }
  //底部内容
  .pro-foot {
    @include size(150px,100%);
    display: flex;
    .foot-left {
      height: 100%;
      flex: 1;
      display:flex;
      justify-content:space-between;
    }
    .foot-right {
      @include size(100%,260px);
      border-radius:6px;
      overflow:hidden;
    }
  }
}
</style>
