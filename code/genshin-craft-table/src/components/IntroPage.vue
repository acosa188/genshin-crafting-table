<template>
  <div class="container">
      <div class="introPageClass">
        <p class="h2">Select a Character</p>  
        <CharacterList :normal="true"/> 
      </div>
  </div>
</template>

<script>

import CharacterList from './CharacterList';

export default {
    components:{       
        CharacterList
    }

}
</script>
<style scoped>
.introPageClass {
    text-align: center;
}

p {
    letter-spacing: .6rem;
    font-weight: 400;
}

</style>