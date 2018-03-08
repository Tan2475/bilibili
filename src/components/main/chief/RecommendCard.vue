<template>
  <div class="recommend-card">
    <a href="#">
      <img :src="videoDetails.bg" alt="封面图">
    </a>
    <div class="video-details">
      <p class="title">{{videoDetails.title}}</p>
      <p class="author">up主：{{videoDetails.name}}</p>
      <p class="whatch">播放：{{videoDetails.watch}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'card',
    props:{
      videoDetails:{
        type:Object,
        required:true,
      }
    },
    data(){
      return{

      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/base.scss";
  .recommend-card{
    position:relative;
    @include size(100px,160px);
    margin: {
      left:20px;
      bottom:20px;
    }
    overflow:hidden;
    font-size:12px;
    border-radius:4px;
    float:left;
    a{
      position:absolute;
      display:inline-block;
      @include size(100%,100%);
      z-index:2;
    }
    .video-details{
      position:absolute;
      top:68px;
      z-index:4;
      @include size(100%,152px);      
      padding:10px 4px 4px;
      background:linear-gradient(0deg,#333 50%,rgba(255,255,255,0));
      .title{
        height:40px;
        line-height:20px;
        color:#fff;
        padding-bottom:6px;
        overflow:hidden;
        
      }
      .author,.whatch{
        color:rgb(175, 175, 175);
        padding-bottom:4px;
        opacity:0;
        transition:all 0.6s;
      }
    }

    //鼠标滑过样式
    &:hover{
      .video-details{
        top:0;
        background:rgba(0, 0, 0, 0.521);
        .author,.whatch{
          opacity:1;
        }
      }
    }
  }


</style>

