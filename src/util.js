export function floderFilter(objects) {
  //console.log(objects)
  // 从 api 中获得的数据中有文件夹和文件，这个函数主要是用来把文件夹筛选出来
  let folders = []
  objects.map(object=>{
    if (object.key.endsWith('/')) {
      let folder = {}
      let folderKey = object.key.substring(0,object.key.length-1)
      folder.key = folderKey
      // 部分英文路径需要翻译，准备一个 name 属性用来翻译
      folder.name = folderKey
      folders.push(folder)
    }
  })
  return folders
}

export function objectFilter(objects) {
    // 处理文件名的数组
    let resolvedNameObjects = []
    // 集合同名文件的数组
    let resolvedListObjects = []
    // 处理文件名
    objects.map(object=>{
      if (!object.key.endsWith('/')) {
        // 获得 name 和 src
        const data = resolveObjectName(object.key)
        object.name = data.name
        object.folder = data.folder.substring(1,object.key.length)
        let src = new Object
        src.kind = data.kind
        src.link = object.src
        object.src = [src]
        resolvedNameObjects.push(object)
      }      
    })
    // 合并同名文件
    let hasTheSameName = false
    resolvedNameObjects.map(object=>{
        hasTheSameName = false
        if (resolvedListObjects.length) {
          resolvedListObjects.map(item=>{
            if (item.name === object.name && item.folder === object.folder) {
              hasTheSameName = true
              item.src.push(object.src) // 添加一个 src 数据进去
            }
          })
        }
        if (!hasTheSameName) {
          resolvedListObjects.push(object) // 添加一个 item
        } 
    }
    )
    // 生成预览图
    resolvedNameObjects.map(object=>{
      // 默认背景图也就是下载链接数组的第一位
      object.img = object.src[0].link
      // 如果下载链接的第一位是 pptx/keynote 之类的文件的话，显示成默认图标
      if (object.src[0].kind === '.ppt' || object.src[0].kind === '.pptx'){
        object.img = 'https://baiduyun-guideline.cdn.bcebos.com/public/ppt.png'
      } else if (object.src[0].kind === '.key' ||object.src[0].kind === '.keynote') {
        object.img = 'https://baiduyun-guideline.cdn.bcebos.com/public/keynote.png'
      }
      // 如果是图片文件，生成一个预览图
      if (object.src[0].kind === '.jpg') {
        object.img = object.img + '@w_150'
      }
    })
    return resolvedListObjects
  }

  function resolveObjectName(key) {
    let name = ''
    let kind = '进行中'
    // 第一步，去除,并获得文件夹结构
    let arr1 = [name];
    let folder = ''
    if (key.indexOf("/")) {
      arr1 = key.split("/");
      for (let i = 0; i < (arr1.length - 1); i++){
        folder = folder + '/' + arr1[i]
      }
    }
    // 第二步，去除，并获得文件类型，第一个字段
    let arr2 = arr1[(arr1.length - 1)].split(".");
    for (let i=0;i<(arr2.length - 1);i++)
    {
      if (i < 1) {
        name = name + arr2[i]
      } else {
        name = name + '.' + arr2[i]
      }
    }
    kind = '.' + arr2[(arr2.length - 1)]
    //console.log(name)
    // 第三步，检查是否有 @ 符号
    if (name.indexOf('@')) {
      let arr3 = name.split('@');
      name = arr3[0]
      for (let i = 1; i < arr3.length; i++)
      {
        kind = '@' + arr3[i] + kind
      }
    }
    return {
      name,
      kind,
      folder
    }
  }