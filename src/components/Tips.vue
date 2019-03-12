<template>
    <div :class="['tips' , this.$store.state.tips ? 'show' : ' ']">
        <div class="time-line"></div>
        <p>这是一个加密文件</p>
        <a target="_blank" href="http://wiki.baidu.com/pages/viewpage.action?pageId=710798000">获得密码></a>
    </div>
</template>

<script>
export default {
    methods: {
        closeModule(){
            this.$store.state.tips = false
        }
    },
    computed: {
        item() {
            if (this.$store.state.tips) {
                return this.$store.state.tips
            } else {
                return null
            }
        }
    },
  watch: {
    item() {
      // 自动关闭
      if (this.$store.state.tips) {
        setTimeout(()=>{this.$store.state.tips = false},6000);
      }
    }
  },
    
}
</script>

<style lang="stylus">
.tips
  width 300px
  height 80px
  background-color #fff
  box-shadow 0 4px 10px rgba(0,0,0,.2)
  position fixed
  bottom 100px
  right 80px
  z-index 100
  opacity 0
  transition .6s all ease-in-out 100ms
  transform translateY(160px)
  border-radius 2px
  box-sizing border-box
  padding 20px
  overflow hidden
  .time-line
    position absolute
    width 100%
    background-color #f5f5f5
    height 4px
    top 0
    left 0
    &:before
      position absolute
      width 0
      background-color #333
      height 100%
      top 0
      right 0
      content ''
      display block
  // border-left solid 4px #000
  &.show
    opacity 1
    transform translateY(0)
    transition .8s all ease-in-out 100ms
    .time-line:before
      animation tima-line 5s linear forwards 
  p
    color #000
    margin 0
    line-height 40px
    display block
    float left
    font-size 14px
    font-weight 500
  a
    float right
    display block
    color #000
    margin 0 4px
    //text-decoration underline
    line-height 40px
    font-size 14px
    opacity 1
    transition .4s all ease-in-out
    &:hover
      opacity .5

@keyframes tima-line
  0%
    width 100%
  100%
    width 0

</style>
