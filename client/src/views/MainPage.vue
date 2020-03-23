<template>
    <div>
        <h1>Covid-19 Global Data</h1>
        <div class="container">
            <table class="table border">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Cases</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in showData" :key="data.index">
                        <td>{{data.name}}</td>
                        <td>{{data.deaths}}</td>
                        <td>{{data.recovered}}</td>
                        <td>{{data.cases}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
    data(){
        return {

        }
    },
    created(){
        this.$store.dispatch('getData')
    },
    computed: mapState([
        'showData'
    ]),
    methods: {
        
    }
}
</script>