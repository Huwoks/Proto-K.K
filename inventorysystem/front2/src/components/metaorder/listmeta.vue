<template lang="html">
    <div class="">
        <navbar/>
        <br>
        <div class="container">
        <div class="row">
            <div class="col text-left">
                <div class="">
                    <h2>Listado de materiales de la orden: {{ orderId }}</h2>
                    <b-button size="sm" :to="{ name: 'NewMeta' }" variant="primary">Agregar</b-button>
                    <b-button size="sm" :to="{ name: 'ListOrder' }">Cancelar</b-button>
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
                            <b-button size="sm" variant="primary" :to="{ name:'EditMeta', params: { orderId: orderId, metaId: data.item.id } }">Editar</b-button>
                            <b-button size="sm" variant="danger" :to="{ name:'DeleteMeta', params: { orderId: orderId, metaId: data.item.id } }">Eliminar</b-button>
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
            orderId: this.$route.params.orderId,
            isBusy: false,
            keyword: '',
            perPage: 10,
            currentPage: 1,
            fields: [
                { key: 'product', label: 'Producto', sortable: true },
                { key: 'price', label: 'Precio Unitario' },
                { key: 'quantity', label: 'Unidades' },
                { key: 'row_total_price', label: 'Total de la fila' },
                { key: 'action', label: 'Acción' }
            ],
            products: []
        }
    },
    computed: {
        items () {
			return this.keyword
				? this.products.filter(item => item.name.includes(this.keyword) || item.phone.includes(this.keyword) || item.address.includes(this.keyword) || item.description.includes(this.keyword))
				: this.products
		},
        rows() {
            return this.products.length
        }
    },
    methods: {
        getProducts (){
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
        }
    },
    created() {
        this.getProducts()
    },
}
</script>

<style lang="css" scoped>

</style>

