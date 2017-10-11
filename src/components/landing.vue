<template>
  <div class="landing">
    <div class="bar" >
      <img v-for="item in main.pages" :src="item.acf.gif.url"/>
    </div>
    <div class="main">
      <img :src="main.posts[0].acf.main.sizes['large']"/>
    </div>
    <!-- <div class="bar" v-for="item in main.pages">
      <img :src="item.acf.gif.sizes['large']"/>
    </div> -->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'template',
  data () {
    return {
      msg: 'The internet is for Pom'
    }
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
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style scoped lang='scss'>
@import "../style/helpers/_mixins.scss";
@import "../style/helpers/_responsive.scss";
@import "../style/_variables.scss";

.bar {
  width: 100vw;
  // height: 20vh;
  display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  img {
    max-width: 15vw;
    height: auto;
  }
}

.main {
  // position: absolute;
  height: 60vh;
  @include center;
  img {
    height: 100%;
  }
}

</style>
