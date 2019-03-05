<template>
    <div class="file-item">
        <div class="img-content">
            <img :src="object.img" alt="">
        </div>
        <p>{{object.name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        object: {
            default: 'default'
        }
    },
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
  p
    font-size 13px
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


