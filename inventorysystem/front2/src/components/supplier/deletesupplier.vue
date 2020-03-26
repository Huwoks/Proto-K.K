<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">


                <h3>¿Estás seguro que deseas eliminar este producto?</h3>
                <p>Nombre: {{ this.element.name }}</p>
                <p>Teléfono: {{ this.element.phone }}</p>
                <p>Dirección: {{ this.element.address }}</p>
                <p>Descripción: {{ this.element.description }}</p>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteProduct" variant="danger">Eliminar</b-button>
                <b-button :to="{ name: 'ListSupplier' }">Cancelar</b-button>
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
            supplierId: this.$route.params.supplierId,
            element: {
                name: '',
                phone: '',
                address: '',
                description: ''
            }
        }
    },
    methods: {
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/suppliers/${this.supplierId}/`
            //const path = `http://127.0.0.1:8000/api/v1/suppliers/${this.supplierId}/`
            axios.get(path).then((response) => {
                this.element.name = response.data.name
                this.element.phone = response.data.phone
                this.element.address = response.data.address
                this.element.description = response.data.description
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deleteProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/suppliers/${this.supplierId}/`
            //const path = `http://127.0.0.1:8000/api/v1/suppliers/${this.supplierId}/`
            axios.delete(path).then((response) => {
                swal("Proveedor eliminado exitosamente.", "", "success")
                location.href = '#/suppliers'
            })
            .catch((error) => {
                swal("No es posible eliminar el proveedor", "", "error")
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