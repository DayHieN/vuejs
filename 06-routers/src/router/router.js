

import ListaPage from '@/modules/articulos/pages/ListaPage'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/acerca', component: () => import(/* webpackChunkName: "acerca" */ '@/modules/articulos/pages/AcercaDePage') },
    { path: '/articulos', component: () => import(/* webpackChunkName: "articulos" */ '@/modules/articulos/pages/ArticuloPage') },
    { path: '/', component: ListaPage },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import(/* webpackChunkName: "notfound" */ '@/modules/shared/NotFoundPage') },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router