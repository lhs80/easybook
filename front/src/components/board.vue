<template>
  <div style="margin-top:32px;">
    <b-media tag="a" href="#" no-body>
      <img src="../assets/banner-s-1.png" alt="" width="100%" class="float-right" style="margin-top:6px">
    </b-media>
    <b-media tag="a" href="#" no-body>
      <img src="../assets/banner-s-3.png" alt="" width="100%" class="float-right" style="margin-top:6px">
    </b-media>
    <b-media tag="a" href="#" no-body>
      <img src="../assets/banner-s-4.png" alt="" width="100%" class="float-right" style="margin-top:6px">
    </b-media>
    <b-media tag="a" href="#" no-body>
      <img src="../assets/banner-s-5.png" alt="" width="100%" class="float-right" style="margin-top:6px">
    </b-media>
    <b-media tag="a" href="#" no-body>
      <img src="../assets/banner-s-6.png" alt="" width="100%" class="float-right" style="margin-top:6px">
    </b-media>
    <b-media tag="a" href="#" class="my-2 border py-2 rounded">
      <img slot="aside" src="../assets/ewm.png" alt="" width="60" height="60" class="ml-3"/>
      <div style="font-size:15px;color:#333" class="mt-2">下载简书手机App</div>
      <span style="font-size:13px;color:#999">随时随地发现和创作内容</span>
    </b-media>
    <div class="row mt-4">
      <div class="col-lg-6 text-muted" style="font-size:14px">简书日报</div>
      <div class="col-lg-6 text-muted text-right pr-3" style="font-size:14px">查看往期</div>
    </div>
    <b-media tag="a" href="#" class="my-2">
      <img slot="aside" src="../assets/ewm.png" alt="" width="60" height="60"/>
      <div class="font14 c33 mt-2">简书交友周刊09——靠药物展雄风，男人那说不出的痛</div>
    </b-media>
    <b-media tag="a" href="#" class="my-2">
      <img slot="aside" src="../assets/ewm.png" alt="" width="60" height="60"/>
      <div class="font14 c33 mt-2">福利情报009——来不及认真地年轻过，就认真地老去</div>
    </b-media>
    <author-list></author-list>
  </div>
</template>
<script>
  import AuthorList from './authorlist.vue';
  export default{
    components: {AuthorList}
  }
</script>