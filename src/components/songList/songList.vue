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
             <mu-card-media :title="playlist.name" :subTitle="creator.nickname">
                 <div class="headBg" :style="headBgObject"></div>
                 <div class="headWrap">
                     <img :src="head_bg"/>
                 </div>
            </mu-card-media>
        </mu-card>

        <mu-list>
            <template v-for="(item, index) in tracks">
                
                <mu-list-item :title="item.name" :describeText="item.ar[0].name + ' - ' + item.al.name" inset>
                    <i class="listIndex">{{index+1}}</i>
                    <mu-icon value="done" slot="right"/>
                </mu-list-item>
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
        // const list = []
        // for (let i = 0; i < 10; i++) {
        //     list.push('item' + (i + 1))
        // }
        return {
            list: {},
            playlist: {},
            tracks: [],
            creator: {},
            head_bg: ''
        }
    },
    computed: {
        headBgObject: function () {
            return {
                backgroundImage: `url(${this.head_bg})`
            }
        }
    },
    methods: {
        back: function() {
            this.$router.push({path: '/index'});
        },
        getDetail: function () {
            let id = this.$route.params.id;
            console.log(id)
            return axios.get(`/playlist/detail`, {
                params: {
                    id: id
                }
            })
        }
    },
    created: function () {
        this.getDetail()
        .then( (res) => {
            this.list = res.data;
            this.head_bg = res.data.playlist.coverImgUrl + "?param=160y160";

            // playlist
            this.playlist = res.data.playlist;
            // creator
            this.creator = res.data.playlist.creator;
            //列表
            this.tracks = res.data.playlist.tracks;
            console.log(res.data)
        })
        .catch( (err) => {
            console.log(err)
        })
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
.mu-card-media {
    overflow: hidden;
    height: 20rem;
    .headBg{
        filter: blur(20);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        filter: blur(20px);
        transform: scale(1.5);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        // z-index:1;
    }
    .headWrap{
        position: relative;
        img {
            margin: 1rem 2rem;
        }
    }
}

.mu-list {
    .listIndex{
        position: absolute;
        left: 2.5rem;
        top: 2rem;
    }
}
</style>
