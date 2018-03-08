<template>
  <div class="navs">
      <div class="bg"></div>
      <div class="mask"></div>
      <div class="wrap">
        <nav-left></nav-left>
        <div class="right">
          <nav-up></nav-up>
          <navLad></navLad>
        </div>
      </div>
  </div>
</template>

<script>
import navLeft from "./nav-left"
import navUp from "./nav-up"
import navLad from "./nav-lad"

export default {
  name: "navs",
  components: {
    navLeft,navUp,navLad
  }
};
</script>

<style lang="scss">

@mixin size($h,$w){
    width:$w;
    height:$h;
}

.navs {
    position:relative;
    height: 42px;
    font-size:12px;
    z-index:4;
  .bg {
    position:absolute;
    @include size(100%,100%);
    background: url("../../../assets/img/banner.png") no-repeat;
    -webkit-filter: bulr(4px);
    filter: blur(4px);
  }
  .mask {
    background: rgba(231, 231, 231, 0.4);
    @include size(100%,100%);
    position: absolute;
  }
  .wrap {
    width: 1160px;
    margin: 0 auto;
    position:relative;
    display:flex;
    justify-content:space-between;
    .right{
      display:flex;
    }
  }
}
</style>

