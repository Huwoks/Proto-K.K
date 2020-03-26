<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">


                <h3>¿Estás seguro que deseas eliminar este producto?</h3>
                <p>Categoria: {{ this.element.product_category }}</p>
                <p># de parte LCSC: {{ this.element.part_number_lcsc }}</p>
                <p>MRF: {{ this.element.mrf_part_number }}</p>
                <p>Descripción: {{ this.element.description }}</p>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteProduct" variant="danger">Eliminar</b-button>
                <b-button :to="{ name: 'ListProduct' }">Cancelar</b-button>
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
            productId: this.$route.params.productId,
            element: {
                product_category: '',
                part_number_lcsc: '',
                mrf_part_number: '',
                description: ''
            }
        }
    },
    methods: {
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/products/${this.productId}/`
            //const path = `http://127.0.0.1:8000/api/v1/products/${this.productId}/`
            axios.get(path).then((response) => {
                this.element.product_category = response.data.product_category
                this.element.part_number_lcsc = response.data.part_number_lcsc
                this.element.mrf_part_number = response.data.mrf_part_number
                this.element.description = response.data.description
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deleteProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/products/${this.productId}/`
            //const path = `http://127.0.0.1:8000/api/v1/products/${this.productId}/`
            axios.delete(path).then((response) => {
                location.href = '#/products'
            })
            .catch((error) => {
                swal("No es posible eliminar el producto", "", "error")
            })
        }
    },
    created() {
        this.getProduct()
    },
}
</script>

<style lang="css" scoped>
    .container{
        margin-top: 60px;    
    }
</style>