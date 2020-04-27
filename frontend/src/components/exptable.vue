<template>
<div>     
        <Table class="Table" position="absolute" fixed="middle"/>
        
    
        <Navbar class="Navbar"/>
    </div>
</template>

<script>
import Navbar from "./Navbar";
import Table from "./Table";
export default {
  components: {
    Navbar,
    Table

  }
};

</script>