<template>
  <div style="border-bottom:solid 1px #e5e5e5;padding-bottom:35px;padding-top:23px;" class="collection">
    <b-button-group size="sm" v-for="list in collectionlist" style="margin-right:22px;margin-top:18px">
      <b-btn style="padding:0">
        <img :src="list.img" width="32" height="32"/>
      </b-btn>
      <b-btn variant="collection" style="padding:0 12px 0 10px;height:34px">{{list.name}}</b-btn>
    </b-button-group>
    <router-link to="collections" target="_blank"><b-button variant="link" size="sm" class="c99">更多热门专题 ></b-button></router-link>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        collectionlist: [
          {name: '书法', img: "//upload.jianshu.io/collections/images/497216/WechatIMG207.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"},
          {name: '青春', img: "//upload.jianshu.io/collections/images/20/%E5%9B%BE.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"},
          {
            name: '读书',
            img: "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {name: '世间事', img: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"},
          {
            name: '社会热点',
            img: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {name: '谈写作', img: "//upload.jianshu.io/collections/images/25/2005503_162125081_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"},
          {name: '旅行·在路上', img: "//upload.jianshu.io/collections/images/13/IMG_3003.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"}
        ]
      }
    }
  }
</script>