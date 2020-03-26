<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">


                <h3>¿Estás seguro que deseas eliminar este producto?</h3>
                <p>Nombre: {{ this.element.name }}</p>
                <p>Teléfono: {{ this.element.phone }}</p>
                <p>Correo: {{ this.element.email }}</p>
                <p>Descripción: {{ this.element.description }}</p>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteProduct" variant="danger">Eliminar</b-button>
                <b-button :to="{ name: 'ListSaleman' }">Cancelar</b-button>
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
            salemanId: this.$route.params.salemanId,
            element: {
                name: '',
                phone: '',
                email: '',
                description: ''
            }
        }
    },
    methods: {
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/saleman/${this.salemanId}/`
            //const path = `http://127.0.0.1:8000/api/v1/saleman/${this.salemanId}/`
            axios.get(path).then((response) => {
                this.element.name = response.data.name
                this.element.phone = response.data.phone
                this.element.email = response.data.email
                this.element.description = response.data.description
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deleteProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/saleman/${this.salemanId}/`
            //const path = `http://127.0.0.1:8000/api/v1/saleman/${this.salemanId}/`
            axios.delete(path).then((response) => {
                swal("Vendedor eliminado exitosamente.", "", "success")
                location.href = '#/saleman'
            })
            .catch((error) => {
                swal("No es posible eliminar el vendedor", "", "error")
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