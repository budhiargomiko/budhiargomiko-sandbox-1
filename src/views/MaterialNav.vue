<template>
    <div class="wrapper">
        <form>
            <input type="radio" id="menu" name="tab" />
            <div class="paper-wrapper">
                <Paper v-for="item in typeList"
                    :key="item.name"
                    :type="item.name"
                    :isChecked="item.checked"
                />
            </div>
            <div class="menu">
                <div>
                    <label for="menu"></label>
                    <label for="home"></label>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="scss" >
    @import '../assets/scss/materialnav';
</style>

<script>
import Vue from 'vue'
import { Fragment } from 'vue-fragment'
const Paper = Vue.component('Paper', {
    props: {
        type: String,
        isChecked: Boolean
    },
    components: {
        Fragment
    },
    template:`
        <Fragment>
            <input type="radio" name="tab" :id="type" :checked="isChecked" />
            <section :class="type">
                <h2>{{SentencedType}}</h2>
                <label :for="type"></label>
            </section>
        </Fragment>`
    ,
    computed:{
        SentencedType(){
            return this.type[0].toUpperCase()+this.type.substring(1);
        }
    }
})

export default {
    name: "MaterialNav",
    data(){
        return{
            typeList: [
                {
                    name: 'home',
                    checked: true
                },
                {
                    name: 'about',
                    checked: false
                },
                {
                    name: 'experience',
                    checked: false
                },
                {
                    name: 'contact',
                    checked: false
                },
            ]
        }
    },
    components: {
        Paper
    },
}
</script>