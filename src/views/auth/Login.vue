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
                <input class='validate' type='email' name='email' id='email' />
                <label for='email' class="blue-text">Username or email </label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='password' name='password' id='password' />
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
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect red lighten-2' >Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </center>
    </div>
</template>


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
</style>