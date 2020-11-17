<template>
  <div class="introPageClass">
    <p class="h2">Select a Character</p>
    <GenshinIcon :height="135" :width="110" name="Amber" :iconImageSrc="amberIcon" :clickHandler="clickIcon('amber')"/>
  </div>
</template>

<script>
import GenshinIcon from './GenshinIcon';
import AmberIcon from '../assets/images/Amber.png';
import { useStore } from 'vuex';

export default {
    data(){
        return{
            amberIcon: AmberIcon
        }
    },
    components:{
        GenshinIcon
    },
    methods:{
        clickIcon(name){
            let store = useStore();

            return function(){
                store.commit("characterSelected", name);
            }
        }
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