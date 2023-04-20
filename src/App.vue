<script>
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";
import Footer from "@/components/Footer.vue";
export default {
  components:{
    Header,
    Home,
    Footer,
    
  },
};
</script>
<template>
  <div id="app">
    <Header/>
    <div class="container mt-3">
      <router-view/>
    </div>

  </div>
  <Footer/>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>