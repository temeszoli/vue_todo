import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AddTodo from '../pages/AddTodo.vue'
import ListTodo from '../pages/ListTodo.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},{
    path: '/add-todo',
    name: 'AddTodo',
    component: AddTodo
},{
    path: '/list-todos',
    name: 'ListTodo',
    component: ListTodo
},
//redirect
{
    path: '/all-jobs',
    redirect: '/jobs'
},
//catch-all 404
{
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
}]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router