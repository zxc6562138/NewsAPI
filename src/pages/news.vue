<template>
  <div class="container">
    <h1><p class="text-center">Breaking News</p></h1>
    <hr/>

    <div class="row">
      <div class="card mb-3 " style="max-width: 750px;" v-for="item in opendate.articles">
      
      <div class="row no-gutters">
      <div class="col-md-4">
      <img :src="getImgURL( item.urlToImage )"  style="max-width: 250px;"  alt="圖片載入失敗">
      </div>
      <div class="col-md-8">
      <div class="card-body">
        <div class="ellipsis">
          <h5 class="card-title"><a :href="item.url" target="_blank"> {{ item.title }}</a></h5>
          <p class="card-text ">{{ item.description }}</p>
        </div>          
        <p class="card-text"><small class="text-muted">出版日期：{{ item.publishedAt }}</small></p>
        
      </div>
      </div>
      </div>
      
      </div>
    </div>
    

  </div> 
  



</template>




<script >
import { mapGetters, mapActions } from 'vuex';


export default {
  created () {
    // created Hook 發出 action call API
    this.$store.dispatch('open1999');

    
  },
  computed: mapGetters({

    opendate: 'getOpen1999',
    regionOption: 'getRegionOption'
  }),
  methods:{
    getURL(url) {
      
      return `${url}`;
    },
    getImgURL(urlToImage) {
     
      
      return `${urlToImage}`;
    },
    
  },

  

};







</script>
<style>
  
  a:link {
  text-decoration: none;
  }
  .card{
    min-height: 200px;
  }
  .ellipsis{
    display: -webkit-box;
    overflow:hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
  
  

  
</style>