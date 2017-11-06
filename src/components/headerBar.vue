<template>
    <mu-appbar title="Title" id="headerBar">
        <mu-icon-button icon="menu" slot="left" @click="closePlayer"/>
        <mu-icon-button icon="queue_music" slot="right" @click="openPlayer"/>
    </mu-appbar>
</template>

<script>
export default {
  name: 'headerBar',
  computed: {
      togglePlayer: function () {
          return this.$store.state.togglePlayer;
      },
      indexName: function () {
          return this.$store.state.indexName;
      }
  },
  methods: {
      openPlayer: function () {
          this.$store.commit("openPlayer");
      },
      closePlayer: function () {
          this.$store.commit("closePlayer")
      },
  }
}
</script>

<style lang="scss" scoped>
#headerBar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>

