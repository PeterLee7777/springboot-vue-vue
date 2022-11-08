import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login";
import Layout from "@/layout/Layout";
import Register from "@/views/Register";
import Book from "@/views/Book";
import User from "@/views/User";

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: 'user',
        name: 'User',
        component: User
      },
      {
        path: 'book',
        name: 'Book',
        component: Book
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
