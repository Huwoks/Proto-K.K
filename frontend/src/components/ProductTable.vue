<template>
    <div class="container">
        <div class="row">
            <h2>Product list</h2> <br>
            <div class="col-md-12">
                <b-table striped hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
                    <template v-slot:cell(image)="data">
                        <img :src="data.value" style="width: 50px; height: 40px;">
                    </template>
                </b-table>     
                <b-pagination size="md" :total-rows="totalItems" v-model="currentPage" :per-page="perPage"></b-pagination>          
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import Table from "./Table";
export default {
    components: {Table},

    data (){
        return{
            fields: [
                {key: 'image', label:'Image'},
                {key: 'mrf_part_number', label: 'MRF'},
                {key: 'description', label: 'Description'}
            ],
            items:[],
            currentPage: 0,
            perPage: 10,
            totalItems: 90
        }
    },

    methods:{
        getItems(){ 
            const path = 'http://sellpoint.ucaribeprojects.xyz/api/v1/products/'
            axios.get(path).then((response) =>{
                this.items = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
           
    },
    created(){
        this.getItems()
    }
}

</script>
