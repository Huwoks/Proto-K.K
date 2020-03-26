<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">


                <h3>¿Estás seguro que deseas eliminar este producto?</h3>
                <p>Nombre: {{ this.element.name }}</p>
                <p>Teléfono: {{ this.element.phone }}</p>
                <p>Descripción: {{ this.element.description }}</p>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteProduct" variant="danger">Eliminar</b-button>
                <b-button :to="{ name: 'ListCustomer' }">Cancelar</b-button>
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
            customerId: this.$route.params.customerId,
            element: {
                name: '',
                phone: '',
                description: ''
            }
        }
    },
    methods: {
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/customers/${this.customerId}/`
            //const path = `http://127.0.0.1:8000/api/v1/customers/${this.customerId}/`
            axios.get(path).then((response) => {
                this.element.name = response.data.name
                this.element.phone = response.data.phone
                this.element.description = response.data.description
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deleteProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/customers/${this.customerId}/`
            //const path = `http://127.0.0.1:8000/api/v1/customers/${this.customerId}/`
            axios.delete(path).then((response) => {
                swal("Cliente eliminado exitosamente.", "", "success")
                location.href = '#/customers'
            })
            .catch((error) => {
                swal("No es posible eliminar el cliente", "", "error")
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