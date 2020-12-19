<template>
  <header  v-if="isLoggedIn">
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>Moja Garaza Aplikacija</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
         
          <li><a @click="logout()">Odjava</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
import firebase from '../firebase';

export default {
  data(){
    return{
        isLoggedIn:false,
        currentUser:false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
  
}
</script>
