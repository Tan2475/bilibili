<template>
  <div class="nav-lad">
      <a href="#">投稿</a>
  </div>
</template>

<script>
export default {
  name:'navLad',
  data(){
      return{

      }
  }
}
</script>

<style lang="scss">
    .nav-lad{
        width:58px;
        height:42px;
        a{
            display:block;
            width:100%;
            height:48px;
            background:#ee5b8c;
            color:#fff;
            font-size:16px;
            text-align:center;
            line-height:42px;
            border-bottom: {
                left-radius: 8px;
                right-radius: 8px;
            }
        }
    }
</style>
