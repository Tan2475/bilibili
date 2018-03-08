<template>
  <div class="bili-module" id="public">
      <div class="left">
              <bili-title></bili-title>
              <div class="videos">
                <bili-video-card v-for="(item,index) in 10" :key="index"></bili-video-card>
              </div>
      </div>
      <div class="right">
        <bili-ranking></bili-ranking>
      </div>
  </div>
</template>

<script>
import biliTitle from "./LowerCommon/PublicTitle";
import biliVideoCard from "./LowerCommon/PublicVideoCard";
import biliRanking from "./LowerCommon/PublicRanking";

export default {
  name: "bili",
  props: ["public"],
  data() {
    return {};
  },
  components: { biliTitle, biliVideoCard , biliRanking }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/base.scss";

.bili-module {
  @include size(382px,100%);
  padding: {
    top: 20px;
    bottom: 30px;
  }
  display:flex;
  .left {
    width: 900px;
    .videos {
      @include size(336px,100%);
    }
  }
  .right{
    @include size(100%,260px)
  }
}
</style>

