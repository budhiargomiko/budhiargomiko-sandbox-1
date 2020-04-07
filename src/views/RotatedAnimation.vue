<template>
    <div id="triangle" @click="runanimation" ref="triangle"></div>
</template>
<style>
    #triangle {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 70px solid #CA2F6F;
    }
</style>
<script>
import dynamics from 'dynamics.js'
export default {
    name : "RotatedAnimation",
    methods: {
        animate1(){
            var el = this.getTriangle;
            dynamics.animate(el, {
              rotateZ: 180,
              scale: 1.5,
              translateX: 0.8,
              borderBottomColor: '#43F086'
            }, {
              type: dynamics.spring,
              friction: 400,
              duration: 1300,
              anticipationSize: 350,
              anticipationStrength: 800,
              complete: this.animate2
            })
        },
        animate2(){
            var el = this.getTriangle;
            dynamics.animate(el, {
              rotateZ: 360,
              translateX: '60%',
              scale: 0.8,
              borderBottomColor: '#CA2F6F'
            }, {
              type: dynamics.spring,
              frequency: 200,
              friction: 800,
              duration: 2200,
              anticipationSize: 350,
              anticipationStrength: 400,
              complete: this.animate1
            })
        },
        runanimation(){
           //this.animate1();
        }
    },
    mounted() {
        this.animate1();
    },
    computed: {
        getTriangle(){
            return this.$refs["triangle"];
        }
    }
}
</script>