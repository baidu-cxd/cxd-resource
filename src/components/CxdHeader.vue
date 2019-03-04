<template>
    <div class="cxd-header">
        <router-link to="./">
          <img alt="logo" class="logo" src="@/assets/logo.svg">
        </router-link>
        <div class="nav">
          <router-link to='portal'>官网资源</router-link>
          <router-link to='console'>控制台</router-link>
          <router-link to='brand'>品牌</router-link>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
  //  顶部导航栏全局样式
  .cxd-header
    z-index 100
    width 100%
    height 80px
    position fixed // 导航栏定位
    top 0
    left 0
    transition .4s all ease-in-out .2s
    .logo
      height 20px
      position absolute
      top 50%
      transform translateY(-50%)
      margin-left 80px // 左侧位置  
      z-index 3
      transition .4s all ease-in-out .2s
    .nav
      height 20px
      position absolute
      top 50%
      transform translateY(-50%)
      right 80px // 左侧位置 
      transition .4s all ease-in-out .2s
      z-index 10
      a
        transition .2s all ease-in-out
        color #666
        margin-left 30px
        font-size 14px 
        display block
        float left
        position relative
        &:hover
          color #000
        &.router-link-active
          color #000
          &:after
            content ''
            display block
            height 2px
            width 100%
            background-color #000
            position absolute
            bottom -30px
            left 0
    .line
      position absolute
      bottom 0
      height 1px
      background-color #e6e6e6
      left 80px
      right 80px
      transform scale(1) translateY(0px)
      opacity 1
      transition .2s all ease-in-out .4s
//  顶部导航栏动画
.home.top
  .cxd-header
    height 122px
  .logo
    margin-left 40px
  .nav
    right 40px
    a
      color #000
      &:hover
        text-decoration-line underline
  .line
    transform scale(.8) translateY(-10  px)
    opacity 0
</style>

