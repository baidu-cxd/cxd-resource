<template>
  <div class="module">
    <transition name="module">
      <div class="module-inner" v-if="this.$store.state.details">
          <div class="icon" @click="closeModule()">
              <div class="left"></div>
              <div class="right"></div>
          </div>
          <div class="bg" @click="closeModule()"></div>
          <div class="windows-content">
              <div class="windows">
                  <div class="img-content"><img :src="item.src[0].link" alt=""></div>
                  <h4>{{item.name}}</h4>
                  <a :href="item.src[0].link" class="button">下 载</a>
              </div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    methods: {
        closeModule(){
            this.$store.state.details = false
        }
    },
    computed: {
        item() {
            if (this.$store.state.details) {
                return this.$store.state.details
            } else {
                return null
            }
        }
    }
    
}
</script>


<style lang="stylus">
.module
  .module-inner
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 1000
    .icon
      position absolute
      right 40px
      top 40px
      width 40px
      height 40px
      z-index 101
      opacity .6
      transition .2 all ease-in-out
      &:hover
        cursor pointer
        opacity 1
        div.left 
          transform translate(-50%,-50%) rotate(-45deg)
        div.right
          transform translate(-50%,-50%) rotate(-135deg) 
      div
        position absolute
        top 50%
        left 50%
        height 2px
        width 24px
        background #fff
        &.left 
          transform translate(-50%,-50%) rotate(45deg)
          transition .2s all ease-in-out
        &.right
          transform translate(-50%,-50%) rotate(-45deg) 
          transition .2s all ease-in-out .2s

    .bg
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      background-color #000
      opacity .8
      z-index 1
    .windows-content
      z-index 2
      position absolute
      width 700px
      height 460px
      left 50%
      top 50%
      transform translate(-50%,-50%)
      .windows
        width 100%
        height 100%
        background-color #f5f5f5
        border-radius 1px
        overflow hidden
        .img-content
          width 600px
          height 340px
          margin 80px auto 0
          box-sizing border-box
          img
            height 100%
            display block
            margin auto
        h4
          font-size 16px
          font-weight 500
          line-height 80px
          position absolute
          top 0
          left 40px
          margin 0
        .button
          display block
          width 40px
          height 32px
          background-color #ebebeb
          border-radius 2px
          color #000
          line-height 32px
          text-align center
          position absolute
          top 20px
          right 20px
          padding 0 20px
          font-size 14px
          transition .2s all ease-in-out
          &:hover
            background-color #000
            color #fff
            cursor pointer

// 动画

.module-enter,.module-leave-to
  opacity 0
  .windows
    transform translateY(40px)
.module-enter-to,.module-leave
  opacity 1
  .windows
    transform translateY(0)
.module-enter-active
  transition all .2s ease-in-out .2s
  .windows
    transition all .4s ease-in-out
.module-leave-active
  transition all .2s ease-in-out .2s
  .windows
    transition all .4s ease-in-out
</style>
