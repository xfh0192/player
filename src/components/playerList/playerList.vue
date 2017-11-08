<template>
    <div id="playerList">
        <mu-list>
            <!-- <mu-list-item v-for="(item, index) in list"></mu-list-item> -->
            <mu-list-item v-for="(item, index) in list" :key="index" @click="play(item)"
                 :title="item.name" :describeText="item.ar[0].name + '-' + item.al.name">
                <i class="listIndex">{{index+1}}</i>
                <mu-icon value="music_note" slot="left" v-if="true"/>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {
    name: 'playerList',
    data: () => {
        const list = [1,2,3,4,5]
        // for (let i = 0; i < 10; i++) {
        //     list.push('item' + (i + 1))
        // }
        return {
            // list: []
        }
    },
    computed: {
        list: function () {
            return this.$store.state.playerList;
        }
    },
    methods: {
        play: function (item) {
            this.$store.commit("play", item);
        }
    }
}
</script>

<style lang="scss" scoped>
#playerList {
    height: 84vh;
    margin: 5rem 0;
    overflow-y: auto;
    overflow-x: hidden;
    .mu-list {
        .listIndex{
            position: absolute;
            left: 2.5rem;
            top: 2rem;
        }
    }
}
</style>
