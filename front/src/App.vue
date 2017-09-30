<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/header.vue';
  import AppFooter from './components/footer.vue';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import 'bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.css'
  import './css/index.css'
  export default {
    name: 'app',
    components: {AppHeader, AppFooter}
  }
</script>

