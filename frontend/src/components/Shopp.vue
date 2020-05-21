<template>
<div>     
        <ShoppingCart class="ShoppingCart" />
        
    
        <Navbar class="Navbar"/>
    </div>
</template>

<script>
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
export default {
  components: {
    Navbar,
    ShoppingCart

  }
};

</script>