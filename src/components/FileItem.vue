<template>
    <div class="file-item">
        <div class="img-content">
            <img :src="object.img" alt="">
        </div>
        <p class="name">{{object.name}}</p>
        <a  class="download" v-if="isDownload()" :href="object.src[0].link"></a>
        <div class="click" v-else @click="openModule()"></div>
        <div class="full-name" v-if="isDownload()"><p>{{object.name}}</p></div>
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
        openModule(){
            this.$store.state.details = this.object
        },
        isDownload(){
            const bucket = this.$route.params.pathMatch
            if (bucket === 'ppt') {
                return true
            } else {
                return false
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


