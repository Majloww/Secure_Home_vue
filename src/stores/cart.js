import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from localStorage if available
    }),
    actions: {
        addProduct(product) {
            this.cart.push(product);
            this.saveCart(); // Save cart to localStorage whenever a product is added
        },
        removeProduct(productId, removeAll = false) {
            if (removeAll) {
                this.cart = this.cart.filter(item => item.product_id !== productId); // Remove all instances of the product
            } else {
                const index = this.cart.findIndex(item => item.product_id === productId);
                if (index !== -1) {
                    this.cart.splice(index, 1); // Remove one instance of the product
                }
            }
            this.saveCart(); // Save updated cart to localStorage
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart)); // Save the cart array to localStorage
        },
    },
});
