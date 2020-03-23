<template>
    <div>
        <h1 style="margin-bottom: 3%;">Hacktiv-care</h1>
        <h3>Login</h3>
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="card container" style="width: 18rem;">
                    <form @submit.prevent="login" class="p-3">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input v-model="username" type="text" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input v-model="password" type="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    data(){
        return {
            username: null,
            password: null
        }
    },
    computed: mapState([
        'url'
    ]),
    methods: {
        login(){
            axios({
                method: 'post',
                url: `${this.url}/login`,
                data: {
                    username: this.username,
                    password: this.password
                }
            })
                .then(res=>{
                    localStorage.setItem('token', res.data.token)
                    this.$router.push({
                        path: '/'
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }
}
</script>