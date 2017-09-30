<template>
  <div>
    <turn-image></turn-image>
    <article-list></article-list>
  </div>
</template>
<script>
  import TurnImage from './turnimage.vue';
  import ArticleList from './articlelist.vue';
  export default{
    components: {TurnImage, ArticleList}
  }
</script>