<template>
    <div class="library" >
      <transition-group name="bucket">
        <router-link  
            v-for="bucket in bucketList()"  
            :to="{path: '/bucket/' + bucket.bucket}"
            :key="bucket.bucket" append>
            <div class="img-wrp">
                <img src="http://baiduyun-guideline.cdn.bcebos.com/public/icon-bucket/folder.svg" alt="">
            </div>
            <p>{{bucket.name}}</p>
        </router-link>
      </transition-group>
    </div>
</template>

<script>
import {BucketDataList} from '@/config';
export default {
    methods: {
      resolveLibraryName(){
          let libarayName = this.$route.params.pathMatch
          return libarayName
      },
      bucketList(){
          return BucketDataList[this.resolveLibraryName()]
      }
    },
}
</script>

<style lang="stylus">
  .library
    min-height 100px
    padding-top 40px
    a
      display block 
      width 140px
      height 140px
      float left
      transition .2s all ease-in-out
      &:hover
        background-color #f5f5f5
      img 
        margin 30px 40px 10px 40px
        animation fade-scale-in .4s ease-in-out  .4s forwards
        opacity 0
      p
        text-align center
        color #000
        margin 0
        font-size 14px
        line-height 14px
        opacity 0
        animation fade-move-in .4s ease-in-out  .6s forwards

//动画

@keyframes fade-scale-in
  0%
    opacity 0
    transform scale(.5)
  100%
    opacity 1
    transform  scale(1)
@keyframes fade-move-in
  0%
    opacity 0
    transform translateY(20px)
  100%
    opacity 1
    transform translateY(0px)
.bucket-enter-to
  opacity 1
.fade-enter-active
  transition: opacity .3s;
.bucket-leave-to
  opacity 0
.fade-leave-active
  transition: opacity .3s;
</style>


