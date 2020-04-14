<template>
    <CRow>
        <CCol lg="6" sm="12">
            <h4>Pure CSS</h4>
            <ul class="sl-wrapper"
                :style="{
                    height: (arr.length*4.5)+'rem',
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
            <h4>Verdict:</h4>
            <p>The most reliable solution you can get. Instead of directly using height,
                you can transit max-height property instead which gives you workaround for height:auto properties</p>
        </CCol>
        <CCol lg="6" sm="12">
            <h4>with javascript</h4>
            <ul class="sl-wrapper"
                :style="{
                    height: (arr.length*4.5)+'rem',
                }"
            >
                <li :ref="'list-'+i" v-for="i in arr" class="sl-js" :key="i"
                    :style="{
                        zIndex: arr.length*10 - i,
                        top: -(1.5*i)+'rem'
                    }"
                    @mouseenter="vExpand('list-'+i)"
                    @mouseleave="vCollapse('list-'+i)"
                >
                    <a href="javascript:void(0)">List Number #{{i+1}}</a>
                    <p>The quick brown fox jumps over the lazy dog</p>
                </li>
            </ul>
            <h4>Verdict:</h4>
            <p>There are some quirkiness with javascript solution, since its response to event isn't
                as fast as CSS response.
            </p>
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
            max-height: 5rem;
            transition: max-height 0.5s;
            &:active, &:hover {
                transition: max-height 0.5s;
                max-height:8.8rem;
            }
        }
        .sl-js {
            height: 5rem;
            transition: height 0.5s;
            &:active, &:hover {
                transition: height 0.5s;
            }
        }        
        .sl, .sl-js {
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
            flex-direction: column;
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
            &:hover {
                background-color: #495399;
                transition-delay: 25ms;
                a, p {
                    color:rgba(255, 255, 255, 0.95);
                    transition-delay: 25ms;
                }
            }
        }
    }
</style>
<script>
export default {
    name: 'StackedList',
    data(){
        return {
            arr : Array(5).fill().map((i, index) => {return index}),
            heightData: {}
        }
    },
    methods: {
        fHover(ref){
            return this.$refs[ref];
        },
        vCollapse(ref){
            let element = this.$refs[ref][0];
            let height = element.scrollHeight;
            let transition = element.style.transition;
            element.style.transition = '';

            requestAnimationFrame(()=>{
                element.style.height = height+'px';
                element.style.transition = transition;
                requestAnimationFrame(()=>{
                    element.style.height = this.heightData[ref];
                });
            });
        },
        vExpand(ref){
            let element = this.$refs[ref][0];
            this.heightData[ref] = element.style.height;
            let height = element.scrollHeight;
            element.style.height = height + 'px';
            element.addEventListener('transitionend', function namedFunc(e){
                element.removeEventListener('transitionend', arguments.callee);
                element.style.height = null;
            });
        }
    }
}
</script>