import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import {
    faUserSecret, faCoffee, faSpinner
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faUserSecret,
    faCoffee,
    faSpinner    
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

export default {
    name: 'fa_icons',
}
