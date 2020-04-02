import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    showSidebar: 'responsive',
    minimizeSidebar: false,
    prev_pair0: '',
}

const mutations = {
    toggleSidebarDesktop(state){
        const sidebarOpened = [true, 'responsive'].includes(state.showSidebar);
        state.showSidebar = sidebarOpened ? false : 'responsive';
    },
    toggleSidebarMobile(state){
        const sidebarClosed = [false, 'responsive'].includes(state.showSidebar);
        state.showSidebar = sidebarClosed ? true : 'responsive';
    },
    set (state, [variable, value]){
        state[variable] = value
    }
}

const forexinput = {
    namespaced: true,
    state : {
        simpleEx: {
            pair0_valid: true,
            prev_pair0 : {},
            prev_pair1 : {}
        }
    },
    mutations: {
        simplePairSet (state, [stategroup, name , value]){
            state[stategroup][name] = value;
        }
    }
}

const currencypair =  {
    namespaced: true,
    state : {
        BTC_USD : 9943.2345,
    },
    mutations: {
        updateCurrency(state, [key, value]){
            Vue.set(state, key, value);
        },
    }
}

export default new Vuex.Store({
    modules: {
        forexinput: forexinput,
        currencypair: currencypair
    },
    state,
    mutations
})

