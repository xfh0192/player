<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>

    <player></player>
  </div>
</template>

<script>
import player from '@/components/player/player'

export default {
  name: 'app',
  components: {
      player
  },
  computed: {
    togglePlayer: function () {
      return this.$store.state.togglePlayer;
    }
  }
}
</script>

<style lang="scss">
@import '../common/base.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  height: 100vh;
}
</style>
