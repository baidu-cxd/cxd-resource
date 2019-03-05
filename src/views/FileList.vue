<template>
    <div class="file-list">
        这是文件列表
    </div>
</template>

<script>
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
    methods: {
        initData() {
            // 计算出 bucket 的名称
            const bucketName = BucketName + '-product'; 
            // 获得文件列表         
            api.listObjects(bucketName).then(data => {
                // 生成单个文件的下载链接
                data.forEach(object => {
                    object.src = 'http://' + bucketName + CDNHost + object.key; 
                });
                // 在文件中排除并获得文件夹
                this.folderList = floderFilter(data)
                // 整理单个文件的数据结构
                // name: 名称
                // src: 下载链接，为一个对象，里面与各种不同的文件类型
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
                // console.log(this.fileList)
            });
        }
    }
}
</script>

