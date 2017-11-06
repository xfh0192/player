<template>
    <div id="indexContent">
        <swiper :options='swiperOption' class='swiper-box'>
            <swiper-slide class='swiper-item' v-for='(item, index) in banners' :key='index'>
                <img :src='item.pic'/>
            </swiper-slide>
            <!-- <swiper-slide class='swiper-item'>
                <img src="http://p1.music.126.net/3JJkur3GfPDydOez9bBMUQ==/18932490719089555.jpg"/>
            </swiper-slide>
            <swiper-slide class='swiper-item'>
                <img src="http://p1.music.126.net/cGg9o0MfCQ0OJ1Cuc4olOA==/18498183627794679.jpg"/>
            </swiper-slide> -->
        </swiper>

        <mu-grid-list class="gridlist">
            <mu-sub-header>推荐歌单</mu-sub-header>
            <mu-grid-tile v-for="(item, index) in list" :key="index">
                <router-link :to="`/song/list?id=${item.id}`" class="router-link"></router-link>
                <img :src="item.picUrl"/></router-link>
                <span slot="title">{{item.name}}</span>
                <span slot="subTitle">by <b>{{item.copywriter}}</b></span>
                <mu-icon-button icon="star_border" slot="action"/>
            </mu-grid-tile>
        </mu-grid-list>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'indexContent',
  data: () => {
      return {
            swiperOption: {
                autoplay: 2000,
                direction: 'horizontal',
                loop: true
            },
            list: [],
            banners: []
            // ,
            // list: [{
            //     image: 'http://p1.music.126.net/9nEJldbaTwBQxRlimeAdzA==/19182079858548719.jpg?param=140y140',
            //     title: 'Breakfast',
            //     author: 'Myron'
            // }, {
            //     image: 'http://p1.music.126.net/23GqdmZsMtVNFgJ7ZTQzgg==/18941286811735327.jpg?param=140y140',
            //     title: 'Burger',
            //     author: 'Linyu'
            // }, {
            //     image: 'http://p1.music.126.net/ynmnUKZ0k8GO_zhheg1YWQ==/19095218439801736.jpg?param=140y140',
            //     title: 'Camera',
            //     author: 'ruolin'
            // }, {
            //     image: 'http://p1.music.126.net/esEt0eINdUFlb-Q9dUBFEw==/109951162934566828.jpg?param=140y140',
            //     title: 'Hats',
            //     author: 'kakali'
            // }, {
            //     image: 'http://p1.music.126.net/esEt0eINdUFlb-Q9dUBFEw==/109951162934566828.jpg?param=140y140',
            //     title: 'Honey',
            //     author: 'yuyang'
            // }, {
            //     image: 'http://p1.music.126.net/nJhoptd3wcASHmo8KK9log==/18742275208733047.jpg?param=140y140',
            //     title: 'Morning',
            //     author: 'mokayi'
            // }, {
            //     image: 'http://p1.music.126.net/RxN3-gZm-daMnqZidZT8Xg==/18976471184024610.jpg?param=140y140',
            //     title: 'Vegetables',
            //     author: 'NUyyyyyyy'
            // }, {
            //     image: 'http://p1.music.126.net/5TCcSAhhbsf0WxkdOZZiyQ==/1424967077965063.jpg?param=140y140',
            //     title: 'water',
            //     author: 'TDDyyyyyyy'
            // }]
      }
  },
  computed: {

  },
  methods: {
      getBanner: function () {
          return axios.get('/banner');
      },
      getPersonalized: function () {
          return axios.get('/personalized');
      }
  },
  mounted: function () {
    //   this.$store.dispatch("getPersonalized")
    var self = this;
    this.getBanner()
    .then(function (res) {
        if (res.data) {
            self.banners = res.data.banners;
            console.log(res.data);
        }
        return self.getPersonalized();
    })
    .then(function (res) {
        if (res) {
            self.list = res.data.result;
            console.log(self.list)
        }
    })
    .catch(function (err) {
        console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
#indexContent{
    height: 84vh;
    margin: 5rem 0;
    overflow-y: auto;
    overflow-x: hidden;
    .mu-grid-tile .router-link{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
    }
}
.swiper-box{
    .swiper-item{
        img{
            width: 100%;
        }
    }
}

</style>
