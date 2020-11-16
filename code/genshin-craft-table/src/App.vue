<template>
  <div class="container-fluid">
    <Header />
    <div class="container">
      <IntroPage />
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import IntroPage from './components/IntroPage';

export default {
  name: 'App',
  components: {
    Header,
    IntroPage
  }
}
</script>

<style>

body,html{
  height: 100%;
  overflow-x:hidden;
}

body{
  background-image: url(assets/images/GenshinBackground.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  
  height: 100vh;
}
</style>
