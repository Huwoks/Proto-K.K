<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Listado de productos</h2>
    
                <div class="overflow-auto"> 
                    <v-data-table striped hover :items="products" :fields="fields" id="products" :per-page="perPage" :current-page="currentPage" small>
                        <template v-slot:cell(action)="data">
                            <b-button size="sm" variant="primary">Editar</b-button>
                            <br>
                            <b-button size="sm" variant="danger">Eliminar</b-button>
                        </template>
                    
                    </v-data-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return{
            perPage: 10,
            currentPage: 1,
            fields: [
                { key: 'product_category', label: 'Categoría' },
                { key: 'part_number_lcsc', label: 'LCSC #Parte' },
                { key: 'mrf_part_number', label: '#MRF' },
                { key: 'description', label: 'Descripción' },
                { key: 'action', label: 'Acción' }
            ],
            products: []
        }
    },
    computed: {
      rows() {
        return this.products.length
      }
    },
    methods: {
        getProducts (){
            const path = 'http://sellpoint.ucaribeprojects.xyz/api/v1/products/'
            axios.get(path).then((response) => {
                    this.products = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    created() {
        this.getProducts()
    },
}
</script>

<style lang="css" scoped>
    
</style>

