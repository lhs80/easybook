<template>
  <div>
    <app-header></app-header>
    <div class="container" style="width:960px">
      <img class="mt-4" src="../assets/recommend-collection.png" alt="" width="100%">
      <b-tabs>
        <b-tab v-for="tab in tabs" :title="tab.name" active>
          <i :class="tab.icon"></i>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
  import AppHeader from '../components/header.vue'
  import AppFooter from '../components/footer.vue'
  import TurnImage from '../components/turnimage.vue';
  import ArticleList from '../components/articlelist.vue';
  export default{
    components: {AppHeader, AppFooter, TurnImage, ArticleList},
    data: function () {
      return {
        tabs: [
          {"name": "推荐", "icon": "jian_iconfont jian-wode-xunzhang"},
          {"name": "热门", "icon": "jian_iconfont jian-remen"},
          {"name": "城市", "icon": "jian_iconfont jian-building"},
          {"name": "校园", "icon": "jian_iconfont jian-ic_school_px"}
        ]
      }
    }
  }
</script>