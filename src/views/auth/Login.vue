<template>
    <div>
           <center>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

          <form class="col s12" method="post">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12 '>
                <input class='validate' type='email'  v-model="email" />
                <label for='email' class="blue-text">Email </label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='password'  v-model="password"/>
                <label for='password' class="blue-text">Password</label>
              </div>
                 <label style='float: left;'>
								<a class='' href='#!'><b>Create Account?</b></a>
							</label>
              <label style='float: right;'>
								<a class='' href='#!'><b>Forgot Password?</b></a>
							</label>
            </div>
            <br />
            <center>
              <div class='row'>
                <button  name='btn_login' v-on:click="login" class='col s12 btn btn-large waves-effect red lighten-2' >Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </center>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data () {
        return{
           email : null,
           password: null,
        };
    },
    methods : {
      login(e){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password)
        .then(
          user => {
          alert(`Uspesno ste se ulogovali`+user.user.email);
           this.$router.push('/').then(()=>
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


<style scoped>
input[type=email]:not(.browser-default){
    border-color: #2196F3;
}
input[type=email]:not(.browser-default):focus{
    border-color: #2196F3;
}
input[type=password]:not(.browser-default){
    border-color: #2196F3;
}
input[type=password]:not(.browser-default):focus{
    border-color: #2196F3;
}
.input-field label { pointer-events: all; }
</style>