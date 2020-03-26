<template>
    
<div class="container">
    <form @submit="onSubmit">
        <div class="form-group row">
            <label for="product_category" class="col-sm-2 col-form-label">Categoría</label>
            <div class="col-sm-6">
                <input type="text" placeholder="Categoría" name="product_category" class="form-control" v-model.trim="form.product_category">
            </div>
        </div>
        <div class="form-group row">
            <label for="part_number_lcsc" class="col-sm-2 col-form-label"># de parte de LCSC</label>
            <div class="col-sm-6">
                <input type="text" placeholder="# Parte LCSC" name="part_number_lcsc" class="form-control" v-model.trim="form.part_number_lcsc">
            </div>
        </div>
        <div class="form-group row">
            <label for="mrf_part_number" class="col-sm-2 col-form-label">MRF</label>
            <div class="col-sm-6">
                <input type="text" placeholder="MRF" name="mrf_part_number" class="form-control" v-model.trim="form.mrf_part_number">
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
                <b-button type="submit" class="btn-large-space" :to="{ name: 'ListProduct' }">Cancelar</b-button>
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
            productId: this.$route.params.productId,
            form: {
                product_category: '',
                part_number_lcsc: '',
                mrf_part_number: '',
                description: ''
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault();

            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/products/${this.productId}/`
            //const path = `http://127.0.0.1:8000/api/v1/products/${this.productId}/`

            axios.put(path, this.form).then((response) => {
                this.form.product_category = response.data.product_category
                this.form.part_number_lcsc = response.data.part_number_lcsc
                this.form.mrf_part_number = response.data.mrf_part_number
                this.form.description = response.data.description

                swal("Producto actualizado exitosamente.", "", "success")
                location.href='#/products'
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getProduct(){
            const path = `http://sellpoint.ucaribeprojects.xyz/api/v1/products/${this.productId}/`
            //const path = `http://127.0.0.1:8000/api/v1/products/${this.productId}/`

            axios.get(path).then((response) => {
                this.form.product_category = response.data.product_category
                this.form.part_number_lcsc = response.data.part_number_lcsc
                this.form.mrf_part_number = response.data.mrf_part_number
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