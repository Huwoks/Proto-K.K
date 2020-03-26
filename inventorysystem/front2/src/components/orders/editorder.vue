<template>
    
<div class="container">
    <form @submit="onSubmit">
        <div class="form-group row">
            <label for="customer" class="col-sm-2 col-form-label">Cliente</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Cliente" name="customer" class="form-control" v-model.trim="form.customer">
            </div>
        </div>
        <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Total</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Total" name="total" class="form-control" v-model.trim="form.total">
            </div>
        </div>
        <div class="rows">
            <div class="col text-left">
                <b-button type="submit" variant="primary">Editar</b-button>
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
            orderId: this.$route.params.orderId,
            form: {
                client: '',
                total: ''
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault();

            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders/${this.orderId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders/${this.orderId}/`

            axios.put(path, this.form).then((response) => {
                this.form.customer = response.data.customer
                this.form.total = response.data.total

                swal("Orden actualizada exitosamente.", "", "success")
                location.href='#/orders'
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders/${this.orderId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders/${this.orderId}/`

            axios.get(path).then((response) => {
                this.form.customer = response.data.customer
                this.form.total = response.data.total
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