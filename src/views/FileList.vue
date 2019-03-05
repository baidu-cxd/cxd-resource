<template>
    <div class="file-list" :class="resolveClass()">
      <FileItem 
        v-bind:key="file.key" 
        v-for="file in fileList"
        :object="file"/>
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
        }
    },
    mounted() {
        this.initData();
    },
    components: {
        FileItem
    },
    methods: {
        resolveClass() {
            let path = this.$route.path
            path = path.replace(/\//g, '-').slice(1,path.length)
            return path
        },
        initData() {
            const thisBucketName = this.$route.params.pathMatch
            // 计算出 bucket 的名称
            const bucketName = BucketName + '-' + thisBucketName; 
            // 获得文件列表         
            api.listObjects(bucketName).then(data => {
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
                console.log(this.fileList)
            });
        }
    }
}
</script>

