<template>
   <nav class="red lighten-2">
       <div class="nav-wrap">
           <div class="container">
               <router-link to="/" class="brand-logo"><i class="fa fa-car" style="margin-top:15px"></i> Moja Garaza<i class="fa fa-wrench" style="margin-top:15px"></i> </router-link>
            <ul class="right">
                <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
                <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
                <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
            </ul>
           </div>
       </div>
   </nav>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'navbar',
    data(){
        return{
            isLoggedIn:false,
            currentUser:false
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(
                // this.$router.push('/login')
                  this.$router.go({path: this.$router.path})
            )
        }
    }
}
</script>