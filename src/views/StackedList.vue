<template>
    <CRow>
        <CCol lg="3">
            <ul class="sl-wrapper"
                :style="{
                    height: (arr.length*3.5)+'rem',
                }"
            >
                <li v-for="i in arr" class="sl" :key="i"
                    :style="{
                        zIndex: arr.length*10 - i,
                        top: -(1.5*i)+'rem'
                    }"
                >
                    <a href="javascript:void(0)">List Number #{{i+1}}</a>
                    <p>The quick brown fox jumps over the lazy dog</p>
                </li>
            </ul>
        </CCol>
    </CRow>
</template>
<style lang="scss">
    .sl-wrapper {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1.5rem;
        font-weight: 100;
        padding-left: 0;
        text-align: center;        
        .sl {
            cursor: pointer;
            background-color:white;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 2rem 0.5rem 0.5rem;
            border-bottom-left-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
            box-shadow: 0px 2px 0.75rem;
            display: flex;
            height: 5rem;
            flex-direction: column;
            transition: height 0.5s;
            a {
                color: #202020;
                position: relative;
                bottom: 0;
                &:hover {
                    color:rgba(255, 255, 255, 0.95);
                    transition-delay: 25ms;
                    text-decoration: none;
                }
            }
            p {
                margin: 1rem;
                font-size: 1rem;
            }
            &:first-child{
                padding-top: 1rem;
                p {
                    margin-top: 1.8rem;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }
            }
            &:hover {
                background-color: #495399;
                transition-delay: 25ms;
                a, p {
                    color:rgba(255, 255, 255, 0.95);
                    transition-delay: 25ms;
                }
            }
            &:active, &:hover {
                height:8.8rem;
                transition: height 0.5s;
            }
        }
    }
</style>
<script>
export default {
    name: 'StackedList',
    data(){
        return{
            arr : Array(5).fill().map((i, index) => {return index})
        }
    }
}
</script>