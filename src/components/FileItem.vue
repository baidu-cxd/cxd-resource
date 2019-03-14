<template>
    <div class="file-item">
        <div class="img-content">
            <img :src="object.img" alt="">
        </div>
        <p class="name">{{object.name}}</p>
        <a  class="download" v-if="isDownload(object.src[0].kind)" :href="object.src[0].link"
        @click="openTips(object.src[0].kind)" ></a>
        <div class="click" v-else @click="openModule()"></div>
        <div class="full-name" v-if="isDownload(object.src[0].kind)"><p>下载：{{object.name}}</p></div>
        <a target="_blank"  v-if="hasPassword(object.src[0].kind)" class='password' href="http://wiki.baidu.com/pages/viewpage.action?pageId=710798000">获得密码></a>
    </div>
</template>

<script>
export default {
    data(){
        return { details : false}
    },
    props: {
        object: {
            default: 'default'
        }
    },
    methods: {
        hasPassword(kind) {
          if (kind.indexOf('@cipher') > -1 ||kind.indexOf('@加密') > -1 ) {
            return true
          } else {
            return false
          }
        },
        openModule() {
          this.$store.state.details = this.object
        },
        isDownload(kind) {
            // 1: 根据 bucket 判断

            //const bucket = this.$route.params.pathMatch
            //if (bucket === 'ppt') {
                //return true
            //} else {
                //return false
            //}

            // 2: 根据文件类型判断( ppt/pptx/key)
            if (kind.indexOf('.ppt') > -1 || kind.indexOf('.key') > -1) {
              return true
            } else {
              return false
            }

        },
        openTips(kind) {
          if (kind.indexOf('@cipher') > -1 || kind.indexOf('@加密') > -1){
             this.$store.state.tips = '有密码'
          }
        }
    }
}
</script>

<style lang="stylus">



.file-item 
  width 100%
  height 100%
  background #fff
  transition .2s background ease-in-out
  position relative
  &:hover
    background #f5f5f5
    cursor pointer
  .click
    display block
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index 9  
  a.download
    display block
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index 10
  &:hover
    .full-name
      transform translateY(0)
      transition .4s all ease-in-out
      opacity 1
    .password
      transform translateY(0)
      transition .4s all ease-in-out
      opacity 1
  .password
    transition .4s all ease-in-out
    display block
    position absolute
    z-index 103
    top 6px
    right 6px
    width 72px
    height 28px
    background-color rgba(0,0,0,.05)
    border-radius 2px
    opacity 0
    transform translateY(-10px)
    color #666
    font-size 12px
    line-height 26px
    padding-left 8px
    box-sizing border-box
    border 1px solid rgba(0,0,0,0)
    &:hover
      color #333
      background-color rgba(0,0,0,0)
      border 1px solid rgba(0,0,0,.1)
  .full-name
    position absolute
    opacity 0
    transition .4s all ease-in-out
    bottom 10px
    left 6px
    right 6px
    padding 4px
    min-height 20px
    z-index 10
    background-color rgba(0,0,0,.8)
    transform translateY(20px)
    border-radius 4px
    p
      font-size 12px
      color #fff
      margin 0
  p.name
    font-size 12px
    position absolute
    bottom 10px
    left 50%
    transform translateX(-50%)
    width 80%
    text-align center
    display block
    height 20px
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  .img-content
    top 20px
    bottom 50px
    left 50px
    right 50px
    box-sizing border-box
    position  absolute
    img 
      width 100%
      display block
      position absolute
      left 0
      right 0
      top 50%
      transform translateY(-50%)
    

</style>


