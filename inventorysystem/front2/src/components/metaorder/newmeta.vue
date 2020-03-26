<template>
    
<div class="container">
    <form @submit="onSubmit">
        <div class="form-group row">
            <label for="order" class="col-sm-2 col-form-label"># Orden</label>
            <div class="col-sm-6">
                <input type="text" placeholder="# Orden" name="order" class="form-control" v-model.trim="form.order" v-model="this.orderId" disabled>
            </div>
        </div>
        <div class="form-group row">
            <label for="product" class="col-sm-2 col-form-label">Producto</label>
            <div class="col-sm-6">
                <model-list-select :list="options"
                     v-model.trim="form.product"
                     option-value="id"
                     :custom-text="customText"
                     placeholder="Selecciona un elemento">
                </model-list-select>  
            </div>
        </div>
        <div class="form-group row">
            <label for="price" class="col-sm-2 col-form-label">Precio Unitario</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Precio Unitario" name="price" class="form-control" v-model.trim="form.price">
            </div>
        </div>
        <div class="form-group row">
            <label for="quantity" class="col-sm-2 col-form-label">Cantidad</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Cantidad" name="quantity" class="form-control" v-model.trim="form.quantity">
            </div>
        </div>
        <div class="form-group row">
            <label for="row_total_price" class="col-sm-2 col-form-label">Precio de fila</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Precio de fila" name="row_total_price" class="form-control" v-model.trim="form.row_total_price">
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
import { ModelListSelect } from "vue-search-select";

export default{
    components: {
        ModelListSelect
    },
    data() {
        return {
            orderId: this.$route.params.orderId,
            form: {
                product: '',
                price: '',
                quantity: '',
                row_total_price: '',
                order: ''
            },
            options: [],
        }
    },
    methods: {
        customText (item) {
            return `${item.id} - ${item.description}`
        },
        getCustomers(){
            const path = 'http://sellpoint.ucaribeprojects.xyz/api/v1/products/'
            //const path = 'http://127.0.0.1:8000/api/v1/products/'
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

            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders_meta/`
            //const path = `http://127.0.0.1:8000/api/v1/orders_meta/`
            axios.post(path, {
                order: this.orderId,
                product: this.form.product,
                price: this.form.price,
                quantity: this.form.quantity,
                row_total_price: this.form.row_total_price
            }).then((response) => {
                this.form.orderId = response.data.orderId
                this.form.product = response.data.product
                this.form.price = response.data.price
                this.form.quantity = response.data.quantity
                this.form.row_total_price = response.data.row_total_price

                swal("El metadato de orden fue agregado exitosamente.", "", "success")
                location.href=`#/orders/${this.orderId}/meta`
            })
            .catch((error) => {
                swal("El metadato de orden no ha sido creado..", "", "error")
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