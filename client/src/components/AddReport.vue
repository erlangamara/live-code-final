<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Cases</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Country ID</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            cases: null,
            countryId: null
        }
    },
    methods:{
        addReport(){
            axios({
                method: 'post',
                url: `${this.$store.url}/reports`,
                headers: {token: localStorage.getItem('token')}
            })
                .then(()=>{

                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }
}
</script>