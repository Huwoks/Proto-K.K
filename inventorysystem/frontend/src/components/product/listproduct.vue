<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Listado de productos</h2>

                <div class="col-md-12">
                    <b-table striped hover :items="products" :fields="fields">

                        <template slot="table-row" slot-scope="props">
                            <b-button size="sm" variant="primary">
                                Editar
                            </b-button>
                            <b-button size="sm" variant="danger">
                                Eliminar
                            </b-button>
                        </template>
                    
                    </b-table>
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
    methods: {
        getProducts (){
            const path = 'http://127.0.0.1:8000/api/v1/products/'
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

