import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage.vue";  // Your main home page component
import Shop from "@/pages/Shop.vue";
import reviewPage from "@/pages/ReviewPage.vue";

// Define the routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,  // Route to the Home page
        meta: { requiresAuth: true },  // Add a meta field to track authentication
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    },
    {
        path: '/review',
        name: 'Review',
        component: reviewPage
    }
];

// Create the router instance and pass the `routes` configuration
const router = createRouter({
    history: createWebHistory(),  // Use the web history mode (HTML5 history API)
    routes,  // Define the routes
});

export default router;  // Export the router
