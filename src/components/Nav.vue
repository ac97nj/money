<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>

    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>


<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  /*添加阴影,导航栏看起来是浮起来的box-shadow*/
  flex-direction: row;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon {
    width: 32px;
    height: 32px;
  }
  > .item.selected{
    color: #FF931D;
  }

}

/*nav > .item{}*/

</style>