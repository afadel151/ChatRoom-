import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'
import LandingPage from './components/LandingPage.vue'
// import HomePage from './components/HomePage.vue'
import ChatRoomPage from './components/ChatRoomPage.vue'
const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    // { path: '/chats/0', component: HomePage },
    {path: '/chats/:id', component : ChatRoomPage, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router