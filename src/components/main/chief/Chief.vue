<template>
  <div class="recommend">
      <slipe></slipe>
      <recommend-module></recommend-module>
  </div>
</template>

<script>
import slipe from "./ChiefSlipePicture";
import recommendModule from "./ChiefRecommend";

export default {
  name: "recommend",
  data() {
    return {};
  },
  components: { slipe , recommendModule}
};
</script>

<style lang="scss">

@import '../../../assets/scss/base.scss';

.recommend {
  @include size(220px,100%);
  padding-bottom: 40px;
  display:flex;
}
</style>

