<template>
  <div class="top">
      <navs></navs>
      <banner></banner>
      <primary-menu></primary-menu>
  </div>
</template>

<script>
import navs from "./nav/navs"
import banner from "./other/banner"
import primaryMenu from "./other/primaryMenu"

export default {
  name:"top",
  components:{
      navs,banner,primaryMenu
  }
}
</script>

<style lang="scss">
  .top{
    position:relative;
    z-index:999;
  }
</style>

