<template>
   <nav class="blue lighten-2">
       <div class="nav-wrap">
           <div class="container">
 
               <router-link to="/" class="brand-logo">
                             <img src="/assets/img/logo.png" alt="">
                </router-link>
            <ul class="right">
                <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
                <li v-if="isLoggedIn"><router-link to="/dashboard">Dashboard</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Prijava</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/register">Registracija</router-link></li>
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