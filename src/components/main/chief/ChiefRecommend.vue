<template>
  <div class="recommend-module">
      <recommend-card v-for="(item,index) in videos" :key="index" :videoDetails="item"></recommend-card>
  </div>
</template>

<script>
import recommendCard from "./RecommendCard";

export default {
  name: "recommendModule",
  data() {
    return {
      videos: []
    };
  },
  components: { recommendCard },
  mounted(){
    this.getVideo()
  },
  methods:{
    getVideo(){
      this.$http.get('static/data/videos.json').then(res=>this.videos=res.data)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/base.scss";

.recommend-module {
  @include size(220px,720px);
}
</style>
