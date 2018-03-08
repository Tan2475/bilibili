<template>
  <div class="card">
      <div class="picture">
          <a href="#">
              <img src="https://i0.hdslb.com/bfs/sycp/tmaterial/201803/41f6a5c46a8374b40421125c34c67ee1.jpg@160w_100h.webp" alt="背景图">
          </a>
          <span class="time">12 : 23</span>
          <div class="watch-icon"></div>
      </div>
      <a href="#" class="title">
        <p >【该细还得细】FGO国服监狱塔复刻攻略</p>          
      </a>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/base.scss";

.card {
  position: relative;
  @include size(100%,160px);
  margin-right: 20px;
  .picture {
    position: relative;
    @include size(100px,160px);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 12px;
    a {
      display: inline-block;
      @include size(100%,100%);
    }
    .time {
      position: absolute;
      bottom: 6px;
      left: 6px;
      font-size: 12px;
      color: #fff;
      display: none;
    }
  }
  .title {
    @include size(40px,100%);
    &:visited {
      color: #333;
    }
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }

  //鼠标滑过样式
  &:hover {
    .time {
      display: inline;
    }
    .title{
        color:#00a1d6;
    }
  }
}
</style>
