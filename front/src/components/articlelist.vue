<template>
  <div class="container pr-0" style="width:960px">
    <div class="row">
      <div class="col-lg-8 note-list">
        <collection-list></collection-list>
        <b-media right-align vertical-align="center">
          <!--图片-->
          <b-img slot="aside" blank blank-color="#ccc" width="150" height="120" alt="placeholder"/>
          <h6 class="mt-0 mb-1 small">怀左同学</h6>
          <h6 class="mt-2"><a href="#" class="font-weight-bold text-dark">听说，你想要一份高质量的书单</a></h6>
          <h6 style="font-size:13px;line-height:1.7">
            文/怀左同学 01 经常有人要我开书单，但我从来不开，原因是我喜欢的，别人不一定接受，或者给人开的书单，对别人不一定起作用。
            这样一来二去，就会浪费大家的时间。 我上学多年，读...
          </h6>
          <div class="meta">
            <a href="#" class="collection-tag">读书</a>
            <a href="#"><i class="jian_iconfont jian-yanjing1"></i> 546</a>
            <a href="#"><i class="jian_iconfont jian-qipao1"></i> 546</a>
            <span><i class="jian_iconfont jian-xin1"></i> 546</span>
            <span><i class="jian_iconfont jian-nsiconrmb" style="vertical-align: top"></i> 546</span>
          </div>
        </b-media>
        <b-media right-align vertical-align="center">
          <b-img slot="aside" blank blank-color="#ccc" width="150" height="120" alt="placeholder"/>
          <h6 class="mt-0 mb-1 small">怀左同学</h6>
          <h6 class="mt-2"><a href="#" class="font-weight-bold text-dark">听说，你想要一份高质量的书单</a></h6>
          <h6 style="font-size:13px;line-height:1.7">文/怀左同学 01 经常有人要我开书单，但我从来不开，原因是我喜欢的，别人不一定接受，或者给人开的书单，对别人不一定起作用。
            这样一来二去，就会浪费大家的时间。 我上学多年，读...</h6>
          <div class="meta">
            <a href="#" class="collection-tag">读书</a>
            <a href="#"><i class="jian_iconfont jian-yanjing1"></i> 546</a>
            <a href="#"><i class="jian_iconfont jian-qipao1"></i> 546</a>
            <span><i class="jian_iconfont jian-xin1"></i> 546</span>
            <span><i class="jian_iconfont jian-nsiconrmb" style="vertical-align: top"></i> 546</span>
          </div>
        </b-media>
      </div>
      <div style="width:29.16667%;margin-left:4.16667%;padding-right:15px;">
        <board-list></board-list>
      </div>
    </div>
  </div>
</template>
<script>
  import CollectionList from './collectionlist.vue';
  import BoardList from './board.vue';
  export default{
    components: {CollectionList, BoardList}
  }
</script>