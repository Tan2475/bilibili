<template>
  <div class="slipe" @mouseenter="stop" @mouseleave="start">
    <transition-group tag="ul" :name="slipe">
      <li v-for="picture in bgArray" :key="picture.id" v-show="picture.id === currentIndex" >
         <a href="#">
           <img :src="picture.src" alt="轮播图">
         </a>
      </li>
    </transition-group> 
     <div class="mark">
       <div class="title">
         <span v-for="(item,index) in bgArray"  :key="index" v-show="index === currentIndex" >{{item.title}}</span>
       </div>
      <div class="icons">
        <span class="markIcon" v-for="(item,index) in bgArray" 
        :key="index" 
        :class="{'focusIcon':index === currentIndex}"
        @click="change(index)" ></span>
      </div>
    </div> 
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "SlipePicture",
  data() {
    return {
      bgArray: [],
      currentIndex: 0,
      timer: "",
      isRight:false,
    };
  },
 mounted(){
      this.getJson()
  },
  components: { draggable },
  computed:{
    slipe(){
      if( !this.isRight){
        return 'left'
      }else{
        return 'right'
      }
    }
  },
  methods: {
    getJson(){
          this.$http.get('static/data/bg.json').then(res=>{
              this.bgArray=res.data
          })
      },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.bgArray.length - 1) {
        this.currentIndex = 0;
      }
    },
    stop() {
      clearInterval(this.timer);
      this.timer=null;
    },
    start() {
      this.isRight=false;
      this.timer =setInterval(()=>{
        this.autoPlay();
      },4000)
    },
    change(index) {
      if(index<this.currentIndex){
        this.isRight=true;
      }else{
        this.isRight=false;
      }
      this.currentIndex=index;
    }
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  }
};
</script>

<style lang="scss" scopde>
@import "../../../assets/scss/base.scss";

.slipe {
  position: relative;
  z-index: 1;
  flex:1;
  @include size(220px,440px);
  background: rgb(206, 206, 206);
  border-radius: 4px;
  overflow: hidden;
  ul {
    @include size(100%,100%);
    li {
      position: absolute;
    }
  }
  .mark {
    position: absolute;
    bottom: 0;
    @include size(35px,100%);
    @include flexStyle(space-between,center);
    background:linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5));
    .title{
      @include size(100%,auto);
      text-align:center;
      line-height:35px;
      color:#fff;
      margin-left:20px;
    }
    .icons {
      @include size(100%,120px);
      @include flexStyle(space-between,center);      
      margin-right:20px;
      .markIcon {
        display:inline-block;
        @include size(14px,14px);
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
      }
      .focusIcon {
        background: #fff;
      }
    }
  }
}

//动画样式
  //动画A
  .left-enter-active,.left-leave-active{
    transition : all 0.5s ease;
  }
  .left-leave-to{
    transform:translateX(-100%);
  }
  .left-enter{
    transform:translateX(100%)
  }

  //动画B
  .right-enter-active,.right-leave-active{
    transition : all 0.5s ease;
  }
  .right-leave-to{
    transform:translateX(100%);
  }
  .right-enter{
    transform:translateX(-100%)
  }
</style>

 