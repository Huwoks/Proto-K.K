<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Estás seguro que deseas eliminar esta orden?</h3>
                <p>Producto: {{ this.element.product }}</p>
                <p>Precio Unitario: {{ this.element.price }}</p>
                <p>Unidades: {{ this.element.quantity }}</p>
                <p>Total de fila: {{ this.element.row_total_price }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteProduct" variant="danger">Eliminar</b-button>
                <b-button :to="{ name: 'ListMeta' }">Cancelar</b-button>
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
            metaId: this.$route.params.metaId,
            element: {
                product: '',
                price: '',
                quantity: '',
                row_total_price: ''
            }
        }
    },
    methods: {
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders_meta/${this.metaId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders_meta/${this.metaId}/`
            axios.get(path).then((response) => {
                this.element.product = response.data.product
                this.element.price = response.data.price
                this.element.quantity = response.data.quantity
                this.element.row_total_price = response.data.row_total_price
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deleteProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders_meta/${this.metaId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders_meta/${this.metaId}/`
            axios.delete(path).then((response) => {
                swal("Metadato eliminado exitosamente.", "", "success")
                location.href = `#/orders/${this.orderId}/meta`
            })
            .catch((error) => {
                swal("No es posible eliminar el metadato", "", "error")
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