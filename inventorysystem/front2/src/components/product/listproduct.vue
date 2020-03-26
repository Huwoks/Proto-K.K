<template lang="html">
    <div class="">
        <navbar/>
        <br>
        <div class="container">
        <div class="row">
            <div class="col text-left">
                <div class="">
                    <h2>Listado de productos</h2>
                    <b-button size="sm" :to="{ name: 'NewProduct' }" variant="primary">Agregar</b-button>
                </div>
                <br>
                <div class="overflow-auto"> 
                    <b-form-input v-model="keyword" placeholder="Search"></b-form-input>
                    <b-table 
                    striped 
                    hover 
                    :items="items" 
                    :fields="fields" 
                    id="products" 
                    :per-page="perPage" 
                    :current-page="currentPage" 
                    :busy.sync="isBusy">
                        <template v-slot:table-busy>
                            <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                            </div>
                        </template>
                        <template v-slot:cell(action)="data">
                            <b-button size="sm" variant="primary" :to="{ name:'EditProducts', params: { productId: data.item.id } }">Editar</b-button>
                            <b-button size="sm" variant="danger" :to="{ name:'DeleteProduct', params: { productId: data.item.id } }">Eliminar</b-button>
                        </template>
                    </b-table>
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="products"
                    ></b-pagination>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import navbar from '@/components/other/navbar.vue'

export default {
    components: {
        navbar
    },
    data () {
        return{
            isBusy: false,
            keyword: '',
            perPage: 10,
            currentPage: 1,
            fields: [
                { key: 'product_category', label: 'Categoría'},
                { key: 'part_number_lcsc', label: 'LCSC #Parte', sortable: true },
                { key: 'mrf_part_number', label: '#MRF' },
                { key: 'description', label: 'Descripción'},
                { key: 'action', label: 'Acción' }
            ],
            products: []
        }
    },
    computed: {
        items () {
			return this.keyword
				? this.products.filter(item => item.product_category.includes(this.keyword) || item.part_number_lcsc.includes(this.keyword) || item.mrf_part_number.includes(this.keyword) || item.description.includes(this.keyword))
				: this.products
		},
        rows() {
            return this.products.length
        }
    },
    methods: {
        getProducts (){
            const path = 'http://sellpoint.ucaribeprojects.xyz/api/v1/products/'
            //const path = 'http://127.0.0.1:8000/api/v1/products/'
            this.isBusy=true
            axios.get(path).then((response) => {
                    this.isBusy=false
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

