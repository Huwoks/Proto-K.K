<template>
    
<div class="container">
    <form @submit="onSubmit">
        <div class="form-group row">
            <label for="customer" class="col-sm-2 col-form-label">Customer</label>
            <div class="col-sm-6">
                <!--<li v-for="option in options">{{ option }}</li>-->
                <b-form-select v-model.trim="form.customer">
                    <b-form-select-option v-for="option in options" :value="option.id" v-bind:key="option.id">{{ option.name }}</b-form-select-option>
                </b-form-select>
            </div>
        </div>
        <div class="form-group row">
            <label for="total" class="col-sm-2 col-form-label">Total</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Total" name="total" class="form-control" v-model.trim="form.total">
            </div>
        </div>

        <div class="rows">
            <div class="col text-left">
                <b-button type="submit" variant="primary">Crear</b-button>
                <b-button type="submit" class="btn-large-space" :to="{ name: 'ListOrder' }">Cancelar</b-button>
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
            form: {
                customer: '',
                total: '',
            },
            options: []
        }
    },
    methods: {
        getCustomers(){
            const path = 'http://sellpoint.ucaribeprojects.xyz/api/v1/customers/'
            //const path = 'http://127.0.0.1:8000/api/v1/customers/'
            this.isBusy=true
            axios.get(path).then((response) => {
                    this.isBusy=false
                    this.options = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        onSubmit(evt){
            evt.preventDefault();

            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders/`
            //const path = `http://127.0.0.1:8000/api/v1/orders/`
            axios.post(path, this.form).then((response) => {
                this.form.customer = response.data.customer
                this.form.total = response.data.total

                swal("La orden fue agregada exitosamente.", "", "success")
                location.href='#/orders'
            })
            .catch((error) => {
                swal("La orden no ha sido creada..", "", "error")
                console.log(error)
            })
        }
    },
    created() {
        this.getCustomers()
    },
}
</script>

<style lang="css" scoped>

    .container{
        margin-top: 60px;    
    }

</style>