<<template>
    <mu-paper id="bottomNav">
        <mu-bottom-nav :value="indexName" @change="changeIndex">
            <mu-bottom-nav-item value="indexContent" title="index" icon="home"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="playerList" title="list" icon="list"></mu-bottom-nav-item>
            <!-- <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/> -->
        </mu-bottom-nav>
    </mu-paper>
</template>

<<script>
export default {
  name: 'bottomNav',
  computed: {
      indexName: function () {
          return this.$store.state.indexName;
      }
  },
  methods: {
      changeIndex: function (val) {
          this.$store.commit("changeIndex", {
              target: val
          })
      }
  }
}
</script>

<<style lang="scss" scoped>
#bottomNav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .routerLink {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
</style>
