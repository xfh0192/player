<template>
    <div id='index'>
        <header-bar></header-bar>

        <indexContent v-if="this.indexName == 'indexContent'"></indexContent>

        <playerList v-if="this.indexName == 'playerList'"></playerList>

        <bottom-nav></bottom-nav>
    </div>
</template>

<script>
import headerBar from '../headerBar'
import bottomNav from '../bottomNav'
import indexContent from '../indexContent'
import playerList from '../playerList/playerList'

export default {
    name: 'index',
    components: {
        headerBar,
        bottomNav,
        indexContent,
        playerList
    },
    data: () => {
        return {
            
        }
    },
    computed: {
        indexName : function () {
            return this.$store.state.indexName;
        }
    }
}
</script>

<style lang="scss" scoped>

#index{
    height: 100%;
    overflow: hidden;
}
</style>

