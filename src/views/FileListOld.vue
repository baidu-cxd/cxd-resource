<template>
  <div class="file-list">
    <!-- 筛选器 -->
    <div class="sub-title">
      <div class="folder-item" 
        :class="isFloderActive('all')"
        @click="changeFloder('all')">
          全部
      </div>
      <div v-for="(item) in folderList" 
        v-bind:key="item.name" class="folder-item"
        :class="isFloderActive(item.key)"
        @click="changeFloder(item.key)">
          {{item.name}}
      </div>
      <div class="input">
          <input v-model="search" type="text" placeholder="请输入拼音/产品缩写"/>
      </div>
    </div>
    <!-- 文件列表 -->
    <div class="file-list-content" 
      name="list" :class="resolveClass()">
      <div class="file-content"
       v-for="(file,i) in fileList"
       v-bind:key="file.key"
       v-show ="isFloder(file.folder) && isSearch(file.name)"
       :style="resolveStyle(i)">
        <FileItem :object="file"/>
      </div>
    </div>
  </div>
</template>

<script>
import FileItem from '@/components/FileItem.vue';
import api from '@/api/api';
import {CDNHost, BucketName} from '@/config';
import {floderFilter,objectFilter} from '@/util';
export default {
    data() {
        return {
            fileList: [],
            folderList: [],
            folder: 'all',
            search: '',
        }
    },
    mounted() {
        this.initData();
    },
    components: {
        FileItem
    },
    methods: {
        changeFloder(a){
          this.folder = a
        },
        isFloderActive(a){
          if (this.folder === a) {
              return 'active'
          }
        },
        isFloder(itemFolder) {
            if (this.folder === 'all') {
                return true
            } else {
                if (itemFolder === this.folder) {
                return true
                } else {
                    return false
                }
            }
        },
        isSearch(itemName){
            if (itemName.indexOf(this.search) > -1){
                return true
            } else if (this.search === ''){
                return true
            } else {
                return false
            }
        },
        resolveClass() {
            let path = this.$route.path
            path = path.replace(/\//g, '-').slice(1,path.length)
            return path
        },
        resolveStyle(i) {
            if(i < 20) {
              return 'animation-delay:' + (20 * i ) + 'ms'
            } else
            return 'animation-delay:' + (20 * 20 ) + 'ms'
        },
        initData() {
            const thisBucketName = this.$route.params.pathMatch
            // 计算出 bucket 的名称
            const bucketName = BucketName + '-' + thisBucketName; 
            // 获得文件列表  
            const options = {
                maxKeys: 1000,
            };        
            api.listObjects(bucketName, options).then(data => {
                // 生成单个文件的下载链接
                data.forEach(object => {
                    object.src = 'http://' + bucketName + CDNHost + object.key; 
                });
                // 在文件中排除并获得文件夹
                // 文件夹属性的数据
                // name: 文件夹名称，用于显示成易读的文本
                // key: 文件夹数据原名
                this.folderList = floderFilter(data)
                // 整理单个文件的数据结构
                // name: 名称
                // kind: 类型
                // folder : 字文件夹名
                // src: 下载链接，为一个对象，里面与各种不同的文件类型，第一个数据为 kind 第二个数据为 link
                //       .svg/eps  :  矢量文件
                //       @2x.jpg   :  倍率文件
                //       @w.jpg    :  反白
                //       @b.jpg    :  蓝色文件
                // img: 展示略缩图
                // key: 文件原始属性，包括 floder 和 name 的属性
                // password: 伪前端密码
                const filelist = objectFilter(data)
                this.fileList = filelist;
                // console.log(this.folderList)
                // (this.fileList)
            });
        }
    }
}
</script>

<style lang="stylus">
.file-list
  .file-list-content
    overflow hidden 
    width fit-content
    width -webkit-fit-content
    width -moz-fit-content
    //margin auto  
    &.bucket-ppt
      .file-content
        width 200px
        height 200px
    &.bucket-logo
      .file-content
        width 200px
        height 200px
    &.bucket-img
      .file-content
        width 300px
        height 260px
  .file-content
    opacity 1
    //transform translateY(0px)
    opacity 0
    width 140px
    height 140px
    float left
    animation item-move-in .2s ease-in-out forwards

.file-list
  .sub-title
    width 100%
    height 80px
    margin-bottom 40px
    border-bottom 1px solid #ebebeb
    opacity 0
    width 100%
    animation item-move-in .2s ease-in-out .4s forwards
    .input
      display block
      float left
      margin 22px
      position relative
      border-bottom 1px solid #999
      input
        padding 0 
        height 32px
        width 180px
        color #000
        display block
        border 1px solid #fff
        outline none
      &:after
        content ''
        display block
        width 14px
        height 14px
        position absolute
        top 10px
        right 2px
        background url(http://baiduyun-guideline.cdn.bcebos.com/public/icon-bucket/search.svg)
      &::placeholder 
        color: #999!important;
        opacity: 1; 
    .folder-item
      padding 0 20px
      height 36px
      line-height 36px
      margin 22px 8px 0 0
      box-sizing border-box
      border-radius 100px
      color #666
      float left
      font-size 13px
      transition .4s all ease-in-out
      &.active
        background-color #000
        color #fff
        &:hover
          color #fff
          background-color #000
      &:hover
        cursor pointer
        color #000
        background-color #f5f5f5

// 动画
@keyframes item-move-in
  0%
    transform translateY(20px)
    opacity 0
  100%
    transform translateY(0)
    opacity 1
.file-list .file-list-content
  .list-enter-active
    transition: all .2s ease-in-out .2s
  .list-leave-active 
    transition: all .2s ease-in-out
  .list-enter, .list-leave-to
    opacity 0
    transform translateY(30px)


</style>


