<template>
    <div>
        <h1>Button test</h1>
        <p v-if="inStock">In Stock({{ quantity }})</p>
        <p v-else> Out of Stock<p>
        <b-button pill variant="primary"
        v-on:click = "addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock}"> Add to Cart </b-button>
        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'btn',
        data(){
            return{
                quantity: 5,
                cart: 0
            }
        },
        methods:{
            addToCart: function(){
                this.cart += 1
                this.quantity -=1
            }
        },
        computed:{
            inStock(){
                return this.quantity
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart {
    margin-right: 30 px;
    float: center;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
  }
  .disabledButton {
    background-color: #d8d8d8;
    border: none;
  }
 
</style>