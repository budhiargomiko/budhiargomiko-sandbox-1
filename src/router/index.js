import Vue from 'vue'
import Router from 'vue-router'

const TheContainer = () => import('@/containers/TheContainer')
const SimpleExchanger = () => import('@/views/SimpleExchanger')
const Animations = () => import('@/views/Animations')
const SampleTable = () => import('@/views/SampleTable')
const Default = () => import('@/views/Default')

Vue.use(Router)
export default new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes(){
    return [
        {
            path: '/',
            name: 'Home',
            redirect: 'default',
            component: TheContainer,
            children: [
                {
                    path: '/',
                    redirect: 'default',
                    name: 'Navigation',
                    component: {
                        render (c) { return c('router-view')}
                    },
                    children: [
                        {
                            path: '/default',
                            name: 'Default',
                            component: Default
                        },
                        {
                            path: '/SimpleExchanger',
                            name: 'SimpleExchanger',
                            component: SimpleExchanger
                        },
                        {
                            path: '/Animations',
                            name: 'Animations',
                            component: Animations
                        },
                        {
                            path: '/SampleTable',
                            name: 'SampleTable',
                            component: SampleTable
                        }
                    ]
                },
            ]
        }
    ]
}

