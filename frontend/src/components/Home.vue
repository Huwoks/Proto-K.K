<template>
    <div>
        <navbar/>
        <carousel/>
        <h3>¡Los mejores productos!</h3><p></p>
        <cardViewer/>
    </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import carousel from '@/components/kkarousel.vue'
import cardViewer from '@/components/kkard_viewer.vue'

export default {
    data() {
        return {
            name: '',
        }
    },
    components: {
        navbar,
        carousel,
        cardViewer,
    }
}
</script>

<style lang="css" scoped>
    
</style>