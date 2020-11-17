<template>
  <div class="appClass">
    <video poster="./assets/images/GenshinBGPic.jpg" loop="loop" muted="muted" style="width: 1920px; height: 1080px;" playsInline autoPlay id="videoBG">
        <source src="./assets/videos/genshinBG.mp4" type="video/mp4" > 
      </video>
    <div class="container-fluid">
      
      <Header />
      
      <keep-alive> 
        <component :is="storeCurrentPage">
        </component>
      </keep-alive>
      

    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import CharacterPage from './components/CharacterPage';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'App',
  components: {
    Header,
    IntroPage,
    CharacterPage
  },
  setup(){
    const store = useStore();

    const storeCurrentPage = computed(() => store.state.currentPage);

    return{storeCurrentPage};
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

body,html{
  height: 100%;
  overflow-x:hidden;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333; 
}

#videoBG{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}

</style>
