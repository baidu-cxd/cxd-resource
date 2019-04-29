<template>
    <div class="cxd-side-component">
        <a href="http://yunshe.design">
          <div class="left" @click.native="flushCom">
            CLOUD EXPERIENCE DESIGN
          </div>          
        </a>
        <router-link to='/about'>
          <div class="right">
            <div class="weibo"></div>
            <span class="line"></span>
            <p>ABOUT</p>
          </div>
        </router-link>
        <a href="http://cloud.baidu.com" class="right-logo">
           <img src="@/assets/baiduyun@2x.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
    methods:{
        flushCom:function(){
            this.$router.go(0);
        }
    }
}
</script>


<style lang="stylus">
.cxd-side-component
  .left
    animation sidebar-fade-left .4s ease-in-out .4s forwards
    font-size 12px
    position fixed
    opacity 0
    z-index 99
    color #000
    font-weight 900
    font-family "avenir", "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    -moz-osx-font-smoothing grayscale
    -webkit-font-smoothing antialiased
    transform rotate(-90deg) translateY(-50%)
    top 50%
    left -40px
    display block
    &:hover:after
      width 100%
    &:after
      width 0%
      height 2px
      content ''
      display block
      background-color #000
      position absolute
      top 50%
      right 0
      transform translateY(-1px)
      transition .2s all ease-in-out
      
  .right
    display none  // 隐藏原版 right
    position fixed
    z-index 99
    font-weight 900
    right 20px
    transform translateY(-50%)
    top 50%
    .line
      width 2px
      height 45px
      display block
      background-color #000
      margin auto
      transition .2s all ease-in-out
    &:hover
      .line
        height 80px
    p
      font-size 12px
      transform rotate(90deg) translateX(15px)
      font-family "avenir", "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
      -moz-osx-font-smoothing grayscale
      -webkit-font-smoothing antialiased
      font-weight 900
      color #3a3a3a
  .right-logo
    animation sidebar-fade-right .4s ease-in-out .4s forwards
    position fixed
    z-index 99
    font-weight 900
    right 0px
    opacity 0
    transform translateY(-50%)
    top 50% 
    img 
      height  18px
      transform rotate(90deg)
@keyframes sidebar-fade-left
  0%
    transform rotate(-90deg) translateY(-150%)
    opacity 0
  100%
    opacity 1
    transform rotate(-90deg) translateY(-50%)
@keyframes sidebar-fade-right
  0%
    transform translateY(-50%) translateX(40px)
    opacity 0
  100%
    opacity 1
    transform translateY(-50%) translateX(0px)
</style>

