<template>
    <div id="songList">
        <mu-appbar title="Title">
            <mu-icon-button icon="arrow_back_ios" slot="left" @click="back"/>
            <mu-icon-menu icon="more_vert" slot="right">
                <mu-menu-item title="菜单 1"/>
                <mu-menu-item title="菜单 2"/>
                <mu-menu-item title="菜单 3"/>
                <mu-menu-item title="菜单 4"/>
                <mu-menu-item title="菜单 5"/>
            </mu-icon-menu>
        </mu-appbar>
        <mu-card>
             <mu-card-media title="Image Title" subTitle="Image Sub Title">
                <img src="http://p1.music.126.net/23GqdmZsMtVNFgJ7ZTQzgg==/18941286811735327.jpg?param=140y140"/>
            </mu-card-media>
        </mu-card>

        <mu-list>
            <template v-for="item in list">
                <!-- <mu-list-item :title="item"></mu-list-item> -->
                <mu-list-item>{{item}}</mu-list-item>
            </template>
        </mu-list>
        <!-- <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'songList',
    data: () => {
        const list = []
        for (let i = 0; i < 10; i++) {
            list.push('item' + (i + 1))
        }
        return {
            list
        }
    },
    computed: {

    },
    methods: {
        back: function() {
            this.$router.push({path: '/index'});
        },
        getDetail: function () {
            return axios.get('/playlist/detail')
        }
    },
    mounted: function () {
        // this.getDetail()
        // .then( (res) => {
        //     console.log(res)
        // })
    }
}
</script>

<style lang="scss" scoped>
.mu-appbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.mu-card {
    margin-top: 5rem;
}
.mu-card-media img{
    height: 20rem;
}
</style>
