<template>
  <div >
    <nav class="main-navigation">
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="dark"
        
        fixed="top"
        position="fixed"
      >
        <b-navbar-brand @click="goHome()">Proto K.K.</b-navbar-brand>
        <b-navbar-nav>
          <!-- Logo -->
        </b-navbar-nav>
        <ul class="menu">
          <li><a @click="goShoppingCart">Carrito</a></li>
          <li class="menu-item-has-children">
            <a href="#">Usuario</a>
            <ul class="sub-menu">
              <li><a href="#">Ordenes</a></li>
              <li><a href="#">Cerrar Sesión</a></li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a href="#">Catálogo</a>
            <ul class="sub-menu">
              <li class="menu-item-has-children">
                <a href="#">Resistencias</a>
                <ul class="sub-menu">
                  <li><a href="#">Carbón</a></li>
                  <li><a href="#">Metal</a></li>
                </ul> 
              </li>
              <li class="menu-item-has-children">
                <a href="#"> Capacitores    </a>
                <ul class="sub-menu">
                  <li><a href="#">Cerámicos</a></li>
                  <li><a href="#">Electrolíticos</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <li><a @click="goAllProducts()">Productos</a></li>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search">
            </b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
    </nav>

    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  components: {
    Footer
  },
  methods: {
    goShoppingCart(){
      this.$router.push({name: 'Shopp'})
    },
    goHome(){
      this.$router.push({name: 'Home'})
    },
    goAllProducts(){
      this.$router.push({name: 'ProductTable'})
    }
  },
};

</script>

<style lang="scss" scoped>
.navbar.navbar-dark.bg-dark{
    background: linear-gradient(180deg, #0288D1,  #0097A7);

 }
*{ 
  box-sizing:border-box;
  font-family:"Dosis", sans-serif; 
}

.main-navigation{
  border-top:1px solid #fff;
  border-bottom:1px solid #fff;
  margin:2em;
}

ul{
  margin:0; //reset
  padding:0;
}

.menu{
  display:flex;  
  flex-direction:column;
  
  li{
    display:block;
    list-style-type:none;
    
  }
  
  li a{
    display:flex;
    text-align:center;
    text-decoration:none;
    color:#fff;
    padding:1rem;
  }
  
  li a:hover{
    
    color:black;
  }
} 

@media (min-width: 800px) {
    .menu{
      flex-direction:row;
      justify-content:space-between;
    }
}



nav ul ul {
    display: none;
}

@media (min-width: 800px) {
  nav ul ul {
    display: none;
    position:absolute;
  }
}

nav ul li:hover > ul {
  display:block;
  color:#fff;
}

@media (min-width: 800px) {
  nav ul li:hover > ul {
    background: linear-gradient(180deg, #0288D1,  #0097A7);
  }
  
  nav ul li:hover > ul a{
    color:#fff;
  }
  
  .sub-menu{
    li{
      display:flex;
      
    }
    
    li:hover, li a:hover{
      color:black;
    }
  }
  
  nav ul ul ul{
    margin:0 0 0 100%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  }
  
  
  
}
.footer{
    margin-top: 100%;
    right: 0%;
    left: 0%;
    position:absolute;
  }
/** {
  
  box-sizing: border-box;
  font-family: sans-serif;
}
.navbar.navbar-dark.bg-dark{
    background: linear-gradient(180deg, #0288D1,  #0097A7);

 }


.main-navigation {
  
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 2em;
  
}

ul {
  margin: 0;
  padding: 0;
}

.menu {
  display: flex;
  flex-direction: column;

  li {
    display: block;
    list-style-type: none;
    text-transform: none;
  }

  li a {
    display: flex;
    text-align: center;
    text-decoration: none;
    color: #fff;
    padding: 1rem;
  }

  li a:hover {
    display:flex;
    
    color: black;
  }
}

@media (min-width: 800px) {
  .menu {
    flex-direction: row;
    
    justify-content: space-between;
  }
}

.menu-item-has-children > a:after {
  font-family: sans-serif;
  
  padding: 1px;
}

nav ul ul {
  display: none;
  
}

@media (min-width: 700px) {
  nav ul ul {
    display: none;
    position: absolute;
  }
}

nav ul li:hover > ul {
  display: block;
  
  padding-left: 2rem;
}

@media (min-width: 800px) {
  
  nav ul li:hover > ul {
    padding-left: 0;
    color:black;
    
  background: linear-gradient(180deg, #0288D1,  #0097A7);
    //background-color: #ddd;
   // 
;
  }

  nav ul li:hover > ul a {
    color: #fff;
    background-color: #fff;
  background: linear-gradient(180deg, #0288D1,  #0097A7); 
  }

  .sub-menu {
   

    li {
      color:black;
      display: flex;
      
      padding-right: 2em;
    }

    li:hover,
    li a:hover {
      color: black;
      
      
    }
  }

  nav ul ul ul {
    color:black;
    margin: 0 0 0 100%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  }

  .menu-item-has-children .menu-item-has-children > a:after {
    
   
    font-family: sans-serif;
    content: ">";
    
    padding: 1px;
    transform: rotate(0deg);
  }
  
  .footer{
    margin-top: 100%;
    right: 0%;
    left: 0%;
    position:absolute;
  }
}*/
</style>
