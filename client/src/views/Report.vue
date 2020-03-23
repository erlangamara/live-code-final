<template>
    <div>
        <h1>Report</h1>
        <div class="container mt-5">
            <h3>Add new report</h3>
            <router-view></router-view>
        </div>
        <div class="container mt-5">
            <table class="table border">
                <thead>
                    <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Report Cases</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in showReport" :key="data.index">
                        <td>{{data.Country.name}}</td>
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
    created(){
        this.$store.dispatch('showReport')
    },
    computed: mapState([
        'showReport'
    ])

}
</script>