<template>
  <div id="app">
    <landing></landing>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import landing from './components/landing'

export default {
  name: 'app',
  components: {
    landing
  },
  computed: {
    ...mapState([
      'main'
    ])
  },
  head: {
    title () {
      return {
        inner: this.title
      }
    }
  },
  methods: {
    ...mapActions(['GET_POSTS', 'GET_PAGES'])
  },
  mounted () {
    this.GET_POSTS()
    this.GET_PAGES()
    // this.$router.beforeEach((to, from, next) => {
    //   if (from.name === 'xxx') {}
    //   next()
    // })
  },
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style lang='scss'>
@import "./style/helpers/_mixins.scss";
@import "./style/helpers/_responsive.scss";
@import "./style/_variables.scss";
@import "./style/helpers/_reset.css";

#app {
  font-family: $sans-serif-stack;
  font-size: $font-size;
  line-height: $line-height;
  color: $black;
  background: $black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
