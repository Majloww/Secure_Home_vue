import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: [],
    }),
    actions: {
        addProduct(product) {
            this.cart.push(product); // Add product to cart
        },
        removeProduct(productId) {
            this.cart = this.cart.filter(item => item.product_id !== productId);
        },
    },
});
