<template>
    
<div class="container">
    <form @submit="onSubmit">
        <div class="form-group row">
            <label for="order" class="col-sm-2 col-form-label"># de Orden</label>
            <div class="col-sm-6">
                <input type="text" placeholder="# de Orden" name="order" class="form-control" v-model.trim="form.order" disabled>
            </div>
        </div>
        <div class="form-group row">
            <label for="product" class="col-sm-2 col-form-label">Producto</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Producto" name="product" class="form-control" v-model.trim="form.product">
            </div>
        </div>
        <div class="form-group row">
            <label for="price" class="col-sm-2 col-form-label">Precio Unitario</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Precio Unitario" name="total" class="form-control" v-model.trim="form.price">
            </div>
        </div>
        <div class="form-group row">
            <label for="quantity" class="col-sm-2 col-form-label">Unidades</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Unidades" name="quantity" class="form-control" v-model.trim="form.quantity">
            </div>
        </div>
        <div class="form-group row">
            <label for="row_total_price" class="col-sm-2 col-form-label">Total de fila</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Total de fila" name="row_total_price" class="form-control" v-model.trim="form.row_total_price">
            </div>
        </div>
        <div class="rows">
            <div class="col text-left">
                <b-button type="submit" variant="primary">Editar</b-button>
                <b-button type="submit" class="btn-large-space" :to="{ name: 'ListMeta' }">Cancelar</b-button>
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
            metaId: this.$route.params.metaId,
            form: {
                order: '',
                product: '',
                price: '',
                quantity: '',
                row_total_price: ''
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault();

            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders_meta/${this.metaId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders_meta/${this.metaId}/`

            axios.put(path, this.form).then((response) => {
                this.form.product = response.data.product
                this.form.price = response.data.price
                this.form.quantity = response.data.quantity
                this.form.row_total_price = response.data.row_total_price
                this.form.order = response.data.order

                swal("Metadato actualizado exitosamente.", "", "success")
                location.href=`#/orders/${this.orderId}/meta`
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/orders_meta/${this.metaId}/`
            //const path = `http://127.0.0.1:8000/api/v1/orders_meta/${this.metaId}/`

            axios.get(path).then((response) => {
                this.form.product = response.data.product
                this.form.price = response.data.price
                this.form.quantity = response.data.quantity
                this.form.row_total_price = response.data.row_total_price
                this.form.order = response.data.order
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