<template>
    <div id="playerList">
        <mu-list>
            <!-- <mu-list-item v-for="(item, index) in list"></mu-list-item> -->
            <mu-list-item v-for="item in list" :key="item"
                 :title="item + 'hello'" :describeText="item + 'Int'">
                <mu-icon value="music_note" slot="left"/>
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
            list
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
}
</style>
