import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import fa_icons from './assets/icons/fa_icons'
import axios from 'axios'

const conf = require('./config.json')
Vue.config.performance = true;
axios.defaults.baseURL= conf.api_uri;
axios.defaults.headers= conf.api_header;
axios.defaults.timeout= 10000;

Vue.use(CoreuiVue);

new Vue({
    el: '#app',
    router,
    store,
    icons,
    fa_icons,
    template: '<App/>',
    components: {
        App
    }
});