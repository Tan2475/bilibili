<template>
  <div class="bili-video-card">
      <div class="bgCard">
          <a href="#">
              <img src="http://i2.hdslb.com/bfs/archive/feca16bd7b8c065dc55f17d864fc1a979f4777af.jpg@160w_100h.webp" alt="雷姆赛高">
          </a>
          <span class="time">02:39</span>
      </div>
      <p>【Re：从零开始的异世界生活】雷姆我最喜欢昂了</p>
      <div class="bt-bar">
        <div class="watch">
             <i class="w-icon"></i>
            2971
        </div>
        <div class="barrage">
            <i class="b-icon"></i>
            200
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "videoCard",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/base.scss";

.bili-video-card {
  @include size(148px,160px);
  margin: {
    right: 20px;
    bottom: 20px;
  }
  position: relative;
  font-size: 12px;
  float: left;
  .bgCard {
    position: relative;
    @include size(100px,160px);
    border-radius: 5px;
    overflow: hidden;
    a {
      display: block;
      @include size(100%,100%);
    }
    &::after {
      content: "";
      @include size(100%,100%);
      background: rgba(51, 51, 51, 0.493);
    }
    .time {
      color: #fff;
      @include size(20px,30px);
    }
    &::after,
    .time {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s;
    }
  }
  p {
	margin-top: 10px;
    line-height: 20px;
    transition: all 0.3s;
  }
  .bt-bar {
    @include size(20px,100%);
    background: #fff;
    @include flexStyle(left,center);
    position: absolute;
    bottom: 0;
    transition: all 0.3s;
    .watch,
    .barrage {
      height: 14px;
      display: flex;
      align-items: center;
      color: #99a2aa;
    }

    .w-icon,
    .b-icon {
      display: inline-block;
      @include size(12px,12px);
      background-image: url("../../../../assets/img/icons.png");
      padding-right: 6px;
    }
    .w-icon {
      background-position: -282px -90px;
    }
    .b-icon {
      background-position: -282px -218px;
      margin-left: 20px;
    }
  }

  //hover样式
  &:hover {
    .bgCard::after {
      display: block;
    }
    .bgCard .time {
      display: inline-block;
      top: 80px;
      left: 10px;
      z-index: 4;
    }
    p {
      color: #00a1d6;
    }
    .bt-bar {
      bottom: -20px;
    }
  }
}
</style>


