<template>
  <div>
    <app-header></app-header>
    <turn-image></turn-image>
    <article-list></article-list>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import AppHeader from '../components/header.vue'
  import AppFooter from '../components/footer.vue'
  import TurnImage from '../components/turnimage.vue';
  import ArticleList from '../components/articlelist.vue';
  export default{
    components: {AppHeader, AppFooter, TurnImage, ArticleList}
  }
</script>