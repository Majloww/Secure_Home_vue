import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage.vue";
import Shop from "@/pages/Shop.vue";
import Cart from "@/pages/Cart.vue";
import ReviewPage from "@/pages/ReviewPage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

// Define the routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    },
    {
        path: '/review',
        name: 'Review',
        component: ReviewPage
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQPage
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;