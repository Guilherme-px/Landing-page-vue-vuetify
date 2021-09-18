import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/home/Home')
    }, {
        path: '/about',
        name: 'About',
        component: () => import('../components/content/About')
    }, {
        path: '/coffee',
        name: 'Coffee',
        component: () => import('../components/content/Coffee')
    }, {
        path: '/contact',
        name: 'Contact',
        component: () => import('../components/content/Contact')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  
    scrollBehavior(to) {
        let top = 0;

        if (to.hash) {
            const element = document.querySelector(to.hash);
            if (element) {
                top = element.offsetTop;
            }
        }
        
        window.scrollTo({ top, behavior: 'smooth' });
    }
})

export default router
