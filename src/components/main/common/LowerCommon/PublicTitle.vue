<template>
  <div class="bili-title">
      <div class="title-left">
          <i class="title-icon"></i>
          <span>动画</span>
          <div class="tab" :class="{select : isSelect}" @click="tabChange($event)">有新动态</div>
          <div class="tab" :class="{select : ! isSelect}" @click="tabChange($event)">最新投稿</div>
      </div>
      <div class="title-right">
          <div class="updata">
              <i class="updata-icon"></i>
              <span>2345条新动态</span>
          </div>
          <div class="more">
              更多
              <i class="more-icon"></i>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "biliTitle",
  data() {
    return {
      isSelect: true
    };
  },
  methods: {
    tabChange(event) {
      if (event.target.className.length > 3) {
        console.log("刷新");
      } else {
        if (this.isSelect) {
          this.isSelect = false;
        } else {
          this.isSelect = true;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/base.scss";
$transparent: 4px solid transparent;

.bili-title {
  @include size(30px,100%);
  @include flexStyle(space-between,top);
  font-size: 12px;
  padding-bottom:15px;
  .title-left,
  .title-right {
    display: flex;
  }
  .title-left {
    .title-icon {
      display: inline-block;
      @include size(40px,40px);
      background-image: url("../../../../assets/img/icons.png");
      background-position: -141px -908px;
      margin: {
        top: -10px;
      }
    }
    span {
      font-size: 24px;
      margin: 0 15px;
      line-height: 24px;
      &:hover{color:#00a1d6}
      cursor:pointer;
    }
    .tab {
      position: relative;
      line-height: 30px;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        color: #00a1d6;
      }
    }
    .select {
      color:#00a1d6;
      border-bottom: 1px solid #00a1d6;
      &::before {
        content: "";
        display: block;
        @include size(0,0);
        border: {
          top: $transparent;
          left: $transparent;
          right: $transparent;
          bottom: 4px solid #00a1d6;
        }
        position: absolute;
        top: 72%;
        left: 50%;
        margin-left: -4px;
      }
    }
  }
  .title-right {
    .updata {
      @include size(24px,113px);
      border: 1px solid #ccd0d7;
      border-radius: 4px;
      @include flexStyle(center,center);
      margin-right:10px;
      .updata-icon {
        display: inline-block;
        @include size(12px,13px);
        background-image: url("../../../../assets/img/icons.png");
        background-position: -475px -89px;
        margin: {
          top: 1;
          right: 5px;
        }
        transition: all 0.5s ease-out;
      }
      &:hover {
        .updata-icon {
          transform: rotate(360deg);
        }
      }
    }
    .more {
      @include size(24px,54px);
      border: 1px solid #ccd0d7;
      border-radius: 4px;
      @include flexStyle(center,center);      
      margin-right:20px;
      .more-icon {
        display: inline-block;
        @include size(12px,6px);
        background-image: url("../../../../assets/img/icons.png");
        background-position: -478px -218px;
        margin-left:4px;
        transition:all 0.2s ease-in-out;
      }
      &:hover{
          .more-icon{
              margin-left:10px;
          }
      }
    }
  }
}
</style>
