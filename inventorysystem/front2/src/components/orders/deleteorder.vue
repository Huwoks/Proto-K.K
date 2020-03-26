<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Estás seguro que deseas eliminar esta orden? (NOTA: los metadatos relacionados a esta orden tambien se eliminarán)</h3>
                <p>ID: {{ this.element.id }}</p>
                <p>Cliente: {{ this.element.customer }}</p>
                <p>Total: {{ this.element.total }}</p>
                <br>
                <h3>Metadatos relacionados a esta orden: </h3>
                    <b-table
                    striped
                    hover
                    :items="products"
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
                    </b-table>
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="products"
                    ></b-pagination>
                </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteProduct" variant="danger">Eliminar</b-button>
                <b-button :to="{ name: 'ListOrder' }">Cancelar</b-button>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            orderId: this.$route.params.orderId,
            element: {
                id: '',
                customer: '',
                total: '',
            },
            isBusy: false,
            keyword: '',
            perPage: 5,
            currentPage: 1,
            fields: [
                { key: 'product', label: 'Producto'},
                { key: 'quantity', label: 'Cantidad', sortable: true },
                { key: 'price', label: 'Precio Unitario' },
                { key: 'row_total_price', label: 'Total de fila' }
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
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders/${this.orderId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders/${this.orderId}/`
            axios.get(path).then((response) => {
                this.element.id = response.data.id
                this.element.customer = response.data.customer
                this.element.total = response.data.total
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getMetaData(){
            const path = 'http://sellpoint.ucaribeprojects.xyz/api/v1/orders_meta/?order=${this.orderId}'
            //const path = `http://127.0.0.1:8000/api/v1/orders_meta/?order=${this.orderId}`
            this.isBusy=true
            axios.get(path).then((response) => {
                    this.isBusy=false
                    this.products = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        deleteProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders/${this.orderId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders/${this.orderId}/`
            axios.delete(path).then((response) => {
                swal("Orden eliminada exitosamente.", "", "success")
                location.href = '#/orders'
            })
            .catch((error) => {
                swal("No es posible eliminar la orden", "", "error")
            })
        }
    },
    created() {
        this.getProduct()
        this.getMetaData()
    },
}
</script>

<style lang="css" scoped>
    .container{
        margin-top: 60px;    
    }
</style>