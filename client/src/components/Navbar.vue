<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand text-light" href="#">Hacktiv-care</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <button @click="home" class="text-light btn btn-info">Home</button>
                    </li>
                    <li class="nav-item">
                        <button @click="report" class="ml-2 text-light btn btn-danger">Report</button>
                    </li>
                    <li class="nav-item">
                        <button @click="logout" class="ml-2 text-light btn btn-danger">Logout</button>
                    </li>
                </ul>      
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },

    methods: {
        home(){
            this.$router.push({
                path: '/'
            })
        },

        report(){
            this.$router.push({
                path: '/report'
            })
        },

        logout(){
            localStorage.removeItem('token')
            this.$router.push({
                path: '/login'
            })
        }
    }
}
</script>