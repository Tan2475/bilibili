<template>
  <div class="navUp">
      <div class="user">
          <div class="user-icon"></div>
      </div>
      <ul>
          <li v-for="item in users" :key="item.id">
              <a href="#">{{item}}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "navUp",
  data() {
    return {
      users: ["大会员", "消息", "动态", "稍后再看", "收场夹", "历史"]
    };
  }
};
</script>

<style lang="scss">
.navUp {
  display: flex;
  align-items: center;
}
.user {
  height: 42px;
  &:hover{
      .user-icon{
          transform:translate(-5px,18px) scale(1.5,1.5);
      }
  }
  .user-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: aquamarine;
    margin-top:3px;
    transition:all 0.3s  0.2s;
  }
}
</style>
