<template>
    <div class="mx-auto d-flex align-items-end" style="height: 18vh">
        <div v-for="key in [0,1,2,3,4,5]" :key=key ref="dots" class="bouncingDot"></div>
    </div>
</template>
<style>
    .bouncingDot {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background: black;
        margin: 1rem;
    } 
</style>
<script>
import dynamics from 'dynamics.js'
export default {
    name: 'BouncingDots',
    methods: {
        animateDots(){
            let el = this.getDots;
            el.forEach((elm,i) => {
                dynamics.animate(elm, {
                    translateY: -100
                }, {
                    type: dynamics.forceWithGravity,
                    bounciness:900,
                    elasticity:300,
                    duration:1600,
                    delay:i*300
                })
            })
            dynamics.setTimeout(this.animateDots, 2000)
        }
    },
    mounted(){
       this.animateDots()
    },
    computed: {
        getDots(){
            return this.$refs['dots']
        }
    }
}
</script>