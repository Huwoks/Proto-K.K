<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
    <b-navbar-brand href="/#/">CortoCircuito</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="">

        <b-nav-item-dropdown text="Operaciones">
          <b-dropdown-item href="/#/products">Productos</b-dropdown-item>
          <b-dropdown-item href="/#/suppliers">Proveedores</b-dropdown-item>
          <b-dropdown-item href="/#/saleman">Vendedores</b-dropdown-item>
          <b-dropdown-item href="/#/customers">Clientes</b-dropdown-item>
          <b-dropdown-item href="/#/orders">Ordenes</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Usuario</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
    
</style>