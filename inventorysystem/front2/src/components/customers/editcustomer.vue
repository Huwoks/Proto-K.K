<template>
    
<div class="container">
    <form @submit="onSubmit">
        <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Nombre" name="name" class="form-control" v-model.trim="form.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Teléfono</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Teléfono" name="phone" class="form-control" v-model.trim="form.phone">
            </div>
        </div>
        <div class="form-group row">
            <label for="description" class="col-sm-2 col-form-label">Descripción</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Descripción" name="description" class="form-control" v-model.trim="form.description">
            </div>
        </div>

        <div class="rows">
            <div class="col text-left">
                <b-button type="submit" variant="primary">Editar</b-button>
                <b-button type="submit" class="btn-large-space" :to="{ name: 'ListCustomer' }">Cancelar</b-button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'

export default{
    data() {
        return {
            customerId: this.$route.params.customerId,
            form: {
                name: '',
                phone: '',
                description: ''
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault();

            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/customers/${this.customerId}/`
            //const path = `http://127.0.0.1:8000/api/v1/customers/${this.customerId}/`

            axios.put(path, this.form).then((response) => {
                this.form.name = response.data.name
                this.form.phone = response.data.phone
                this.form.description = response.data.description

                swal("Cliente actualizado exitosamente.", "", "success")
                location.href='#/customers'
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/customers/${this.customerId}/`
            //const path = `http://127.0.0.1:8000/api/v1/customers/${this.customerId}/`

            axios.get(path).then((response) => {
                this.form.name = response.data.name
                this.form.phone = response.data.phone
                this.form.description = response.data.description
            })
            .catch((error) => {
                console.log(error)
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