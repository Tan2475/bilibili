<template>
  <div class="bili-ranking">
      <div class="header">
          <h3>排行</h3>
          <div class="tab">
                 <div class="tab-item " :class="{change:isChange}" @mouseenter="changeList($event)">全部</div>
                <div class="tab-item " :class="{change: !isChange}" @mouseenter="changeList($event)">原创</div>
          </div>
          <div class="date">
              <span >三日<i class="icon"></i></span>
              <span class="monday" >周一</span>
          </div>
      </div>
      <div class="rank-list">
          <div class="wrap" :style="slipe">
             <ranks v-for="(item,index) in Ranks" :key="index"   :Randateils="item"></ranks>              
          </div>
      </div>
      <div class="see-more">
          <a href="#">
                       查看跟多
          <i class="icon"></i>
          </a>
      </div>
  </div>
</template>

<script>
import ranks from "./Ranks";

export default {
  name: "biliRanking",
  data() {
    return {
      isChange: true,
      Ranks: [
        { title: "中国美女一人承包日本露天温泉,贫穷节目" },
        { title: "【毛蛋】八一八史上最奇葩的护肤品" }
      ],
      slipe:{transform:"translateX(0)"}
    };
  },
  components: { ranks },
  methods: {
    changeList(event) {
      if (event.target.classList.length < 2) {
        if (this.isChange) {
            this.isChange = false;
            this.slipe.transform="translateX(-50%)";
        } else {
            this.isChange = true;
            this.slipe.transform="translateX(0)";            
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/base.scss";

.bili-ranking {
  @include size(100%,100%);
  //头部控件
  .header {
    @include size(24px,100%);
    h3 {
      font-size: 18px;
      font-weight: b400;
    }
    display: flex;
    .date {
      position: relative;
      z-index:10;
      margin-left: 85px;
      font-size: 12px;
      @include size(24px,43px);
      padding: 0 7px;
      border: 1px solid #ccd0d7;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.2s;
      span {
        display: inline-block;
        @include size(100%,100%);
        line-height: 24px;
        .icon {
          display: inline-block;
          @include size(6px,12px);
          background-image: url("../../../../assets/img/icons.png");
          background-position: -475px -157px;
          margin-left: 4px;
        }
      }
      .monday {
        position: absolute;
        left: 1px;
        @include size(24px,57px);
        padding-left: 7px;
        background:#fff;
      }
      &:hover {
        padding-bottom: 24px;
        .monday:hover {
          background: #ccd0d7;
        }
      }
    }
    .tab {
      width: 60px;
      margin-left: 20px;
      @include flexStyle(space-between,bottom);
      .tab-item {
        line-height: 24px;
        position: relative;
        transition: all 0.3s;
      }
      .change {
        color: #30b3df;
        border-bottom: 1px solid #30b3df;
        &::after {
          position: absolute;
          bottom: -1px;
          margin-left: 39%;
          content: "";
          display: block;
          @include size(0,0);
          border-top: 4px solid transparent;
          border-right: 4px solid transparent;
          border-left: 4px solid transparent;
          border-bottom: 4px solid #30b3df;
        }
      }
    }
  }
  //排行列表
  .rank-list {
    @include size(auto,100%);
    overflow: hidden;
    .wrap{
        @include size(auto,200%);
        display: flex;
        transition:all 0.3s;
    }
  }
  //更多icon
  .see-more {
    @include size(26px,100%);
    border-radius: 4px;
    background: #e5e9ef;
    &:hover {
      background: #ccd0d7;
    }
    a {
      display: inline-block;
      @include size(100%,100%);
      @include flexStyle(center,center);
      color: #333;
      .icon {
        display: inline-block;
        @include size(12px,6px);
        margin-left: 4px;
        background: url("../../../../assets/img/icons.png");
        background-position: -478px -218px;
      }
    }
  }
}
</style>