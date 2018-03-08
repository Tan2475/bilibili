<template>
        <ul>
              <li v-for="(item,index) in 7" :key="index">
                 <a href="#" v-if="index === 0" >
                      <i class="icon" :class="{bgChange : index < 3 }">{{index+1}}</i>
                      <div class="first">
                          <img src="//i0.hdslb.com/bfs/archive/e73e9afa0482d7663f95cae715b40078a32981de.jpg@100w_63h.webp" alt="frist">
                          <div class="msg">
                                <p>我的滑板鞋时尚时尚最草榴</p>  
                                <span class="score">综合评分：9.8万</span>
                          </div>
                      </div>
                  </a>
                  <a href="#" v-else>
                      <i class="icon"  :class="{bgChange : index < 3 }">{{index+1}}</i>
                      <p>{{Randateils.title}}</p>
                  </a>
              </li>
          </ul>
</template>

<script>
export default {
  name: "Ranks",
  props:['Randateils'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/base.scss";

ul {
  list-style: none;
  font-size: 12px;
  @include size(auto,260px);
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    margin-top: 20px;
    flex:auto;
    a {
      display: block;
      width: 100%;
      display: flex;
      justify-content: left;
      .icon {
        display: block;
        @include size(18px,14px);
        padding: 0 2px;
        background: #b8c0cc;
        font-weight: bold;
        font-family: "微软雅黑";
        color: #fff;
        line-height: 18px;
        text-align: center;
        border-radius: 4px;
      }
      p {
        line-height: 18px;
        letter-spacing: 0.8px;
        padding-left: 6px;
        overflow: hidden;
      }
      .first {
        height: 50px;
        padding-left: 6px;
        @include flexStyle(space-between,center);
        img {
          @include size(50px,80px);
          border-radius: 4px;
        }
        .msg {
          display: flex;
          flex-direction: column;
          align-items: left;
          text-align: left;
          .score {
            color: #99a2aa;
            padding-left: 6px;
          }
        }
      }
      &:hover {
        p {
          color: #30b3df;
        }
      }
      .bgChange {
        background: #f25d8e;
      }
    }
  }
}
</style>


