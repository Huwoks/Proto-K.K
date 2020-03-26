Vue.component('button', {

    template: `
        <button v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock}"> Add to Cart </button>
        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
    `,
    data(){
        return{
            quantity: 10,
            cart: 0
        }
    },
    methods:{
        addToCart: function(){
            this.cart += 1
        }
    },
    computed:{
        inStock(){
            return this.quantity
        }
    }
})

var app = new Vue({
    el: '#app'
})