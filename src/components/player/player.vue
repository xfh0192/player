<template>
    <transition name="player">
        <div id="player" v-show="togglePlayer">
            <mu-appbar>
                <mu-icon-button icon="close" slot="left" @click="closePlayer"/>
                <p class="songName" slot="default">
                    <h2>{{playingSong.name}}</h2>
                    <h3>{{playingSong.ar[0].name}}</h3>
                </p>
                <mu-icon-button icon="list" slot="right"/>
            </mu-appbar>

            <div class="coverBox" circle :zDepth="3">
                <!-- <img src="http://p1.music.126.net/nJhoptd3wcASHmo8KK9log==/18742275208733047.jpg?param=140y140"/> -->
                <img :src="playingSong.al.picUrl"/>
            </div>

            <div id="ctrl">
                <mu-linear-progress mode="determinate" :value="value"/>

                {{currentTime}}:{{duration}} || {{value}}
                <ul>
                    <li><mu-icon-button icon="first_page" @click="prev"/></li>
                    <li><mu-icon-button icon="last_page" @click="next"/></li>
                    <li v-if="$playing">
                        <mu-icon-button icon="pause_circle_outline" @click="pause"/>
                    </li>
                    <li v-if="!$playing">
                        <mu-icon-button icon="play_circle_outline" @click="play"/>
                    </li>
                </ul>

                <audio :src='playingSong.musicUrl' controls>
                    当前浏览器不支持audio
                </audio>
            </div>

        </div>
    </transition>
</template>

<script>
export default {
    name: 'player',
    data: () => {
        return {
            // value: 0,
            audio: {},
            currentTime: 0,
            duration: 0
            // $playing: false
        }
    },
    computed: {
        togglePlayer: function () {
            return this.$store.state.togglePlayer;
        },
        playingSong: function () {
            return this.$store.state.playingSong;
        },
        value: function () {
            console.log(this.currentTime / this.duration * 100)
            return (this.currentTime / this.duration * 100) || 0;
        }
    },
    methods: {
        closePlayer: function () {
            this.$store.commit("closePlayer")
        },
        play: function () {
            this.$playing = true;
            // this.audio.$playing = true;
            this.audio.play();
        },
        pause: function () {
            // this.$set(this.audio, '$playing', false);
            // this.audio.$playing = false;
            this.$playing = false;
            this.audio.pause();
        },
        prev: function () {
            this.$store.commit("prev");
        },
        next: function () {
            this.$store.commit("next");
        }
        // getCurrentTime: function () {
        //     return this.audio.el && this.audio.el.currentTime || 0;
        // }
    },
    watch: {
        audio: {
            deep: true,
            handler: function (val, oldValue) {
                this.currentTime = val.currentTime;
            }
        }
    },
    mounted: function () {
        var audio = this.$el.querySelector("audio");
        if (audio) {
            this.audio = audio;
            // this.$set(this.audio, '$playing', false);
            this.$playing = false;
            audio.addEventListener("canplay", function () {
                this.play();
                this.duration = this.audio.duration;
            }.bind(this))

            audio.addEventListener("ended", function () {
                this.next()
                // this.currentTime = 0;
            }.bind(this))
        }
    }
}
</script>

<style lang="scss" scoped>
.player-enter-active, .player-leave-active {
    transition: all 0.3s;
}
.player-enter, .player-leave-to {
    transform: translate(100vw, 0)
}
#player {
    width: 100vw;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 9999;
    // background: #fff;
    // background: url('http://p1.music.126.net/nJhoptd3wcASHmo8KK9log==/18742275208733047.jpg?param=140y140') no-repeat 0 0;
    // background-size: cover;
    background: linear-gradient(145deg, #b4ecd4, #55aebb);
    .songName{
        text-align: center;
    }
    .coverBox {
        padding: 0 2rem 0 0;
        box-sizing: content-box;
        height: 140px;
        width: 140px;
        background: url('./album_cover_player.png') no-repeat 0 0;
        background-size: contain;
        position: relative;
        top: 25%;
        left: 50%;
        margin: -70px 0 0 -70px;
        img {
            height: 140px;
            width: 140px;
        }
    }
    #ctrl {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 20vh;
        background: #fff;
        ul, .box{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: stretch;
            li {
                flex: 1 0 auto;
                text-align: center;
            }
        }
    }
}
</style>
