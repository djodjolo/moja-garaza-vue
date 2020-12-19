<template>
<nav class="navbar navbar-dark" style="background-color:#64B5F6;">
  <div class="container">

    <div class="order-0">
        <a class="navbar-brand" href="#">
          <router-link to="/" class="brand-logo">
    <img src="/assets/img/logo.png"  height="30" class="d-inline-block align-top" alt="">
      </router-link></a>
    </div>
    <div class="navbar">
            <a  v-if="!isLoggedIn" class="nav-link text-white" data-toggle="modal" href="" data-target="#modalPrijava">Prijava</a>
            <a class="nav-link text-white" v-if="!isLoggedIn" data-toggle="modal" href="" data-target="#modalRegistracija">Registracija</a>
            <a href="" v-if="isLoggedIn" class="nav-link text-white"  v-on:click="logout">Odjavi se</a>
    </div>

    <div class="modal fade" id="modalPrijava" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="exampleModalLabel">Prijava</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form class="form-signin text-center">
      <img class="mb-4" src="/assets/img/logo.png" alt=""  height="72">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" data-dismiss="modal" v-on:click="login">Prijavi se</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal" data-toggle="modal" href="" data-target="#modalRegistracija">Registruj se</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="modalRegistracija" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Registracija</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal" data-toggle="modal" href="" data-target="#modalPrijava">Prijavi se</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</nav>
<!-- 
<nav class="navbar navbar-light" style="bacground-color:#64B5F6">
  <a class="navbar-brand" href="#">
      <router-link to="/" class="brand-logo">
    <img src="/assets/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      </router-link>
 <ul class="right">
                <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
                <li v-if="isLoggedIn"><router-link to="/dashboard">Dashboard</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Prijava</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/register">Registracija</router-link></li>
                <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
            </ul>
  </a>
</nav> -->
<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
  <a class="navbar-brand" href="#"><router-link to="/" class="brand-logo">
    <img src="/assets/img/logo.png"  height="30" class="d-inline-block align-top" alt="">
      </router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
      <li class="nav-item" v-if="!isLoggedIn">
        <a class="nav-link" data-toggle="modal" href="" data-target="#modalPrijava">Prijava</a>
      </li>
     <li class="nav-item" v-if="!isLoggedIn">
        <a class="nav-link" data-toggle="modal" href="" data-target="#modalRegistracija">Registracija</a>
      </li>
      <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
    </ul>
  </div>
    </div>
</nav> -->


</template>
<script>
import firebase from 'firebase';
export default {
    name: 'navbar',
    data(){
        return{
            isLoggedIn:false,
            currentUser:false,
            email : null,
            password: null,
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
                this.$router.push('/')
                // this.$router.go({path: this.$router.path})
            )
        },
        login(e){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password)
        .then(
          user => {
          alert(`Uspesno ste se ulogovali`+user.user.email);
           this.$router.push('/dashboard').then(()=>
            this.$router.go({path: this.$router.path})
           );
        },
        err => {
          alert(err.message);
        });
        e.preventDefault();
      }
    }
}
</script>