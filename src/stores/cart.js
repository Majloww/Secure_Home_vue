import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    }),
    actions: {
        addProduct(product) {
            this.cart.push(product);
            this.saveCart(); //save when added product
        },
        removeProduct(productId, removeAll = false) {
            if (removeAll) {
                this.cart = this.cart.filter(item => item.product_id !== productId); //remove all instances
            } else {
                const index = this.cart.findIndex(item => item.product_id === productId);
                if (index !== -1) {
                    this.cart.splice(index, 1); //remove one instance
                }
            }
            this.saveCart();
        },
        clearCart() {
            this.cart = [];
            this.saveCart();
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart)); //save cart to local storage
        },
    },
});
