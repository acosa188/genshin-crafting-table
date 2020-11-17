<template>
    <div class="genshinIconClass" :style="styleObject" @click="clickHandler">
        <img :src="iconImageSrc" alt="genshin-icon">
        <p>{{name}}</p>
    </div>
</template>

<script>
export default {
    props:{
        iconImageSrc: {
            type: String,
            required: true
        },
        name: String,
        height: Number,
        width: Number,
        clickHandler: Function 
    },
    computed:{
        styleObject(){
            return{
                height: this.height + "px",
                width: this.width + "px"
            }
        }
    }
}
</script>

<style scoped>
.genshinIconClass{
    background-color: #ffffffb2;
    border-radius: 5px;
}

.genshinIconClass:hover,
.genshinIconClass:focus{
    background-color: #ffffffe5;
    cursor: pointer;
    box-shadow: 0 0.5em 0.5em -0.4em #1313;
    transform: translateY(-0.35em);
    transition-duration: 0.4s;
}

p{
   font-family: 'Roboto', sans-serif; 
   font-weight: 500;
   font-size: 1.25rem;
   color: #1D1D1D;
}
</style>
