<template>
  <div class="app-content">
      <div class="wrap">
          <recommend></recommend>
          <promotion></promotion>
          <public-module></public-module>
      </div>
  </div>
</template>

<script>
import recommend from "./chief/Chief";
import promotion from "./promotion/Promotion";
import publicModule from "./common/PublicModule";

export default {
  name: "app-conent",
  data() {
    return {}
  },
  components: { recommend, promotion, publicModule },
};
</script>

<style lang="scss" >
@import "../../assets/scss/base.scss";

.wrap {
  @include size(auto,1160px);
  margin: 0 auto;
}
</style>
