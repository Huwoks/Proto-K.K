<template>
    <div class="container">
        <div class="row">
            <h2>Product list</h2> <br>
            <div class="col-md-12">
                <b-table striped hover :items="items" :fields="fields"></b-table>               
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
            items:[]
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
        }   
    },
    created(){
        this.getItems()
    }
}

</script>
