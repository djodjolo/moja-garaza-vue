<template>
    <div id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header">
               Auto
           </li>
           <li v-for="car in cars" v-bind:key="car.id" class="collection-item">
               <div class="chip">
                   Auto
               </div>
               {{car.name}}

               <router-link class="secondary-content" v-bind:to="{name: 'view-car', params: {vehicle_id: car.vehicle_id}}"> <i class="fa fa-eye"></i> </router-link>
           </li>
       </ul>
    <div class="fixed-action-btn">
        <router-link to="/dashboard/new-vehicle" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
        </router-link>
    </div>

    </div>
</template>

<script>
import db from './firebaseInit';
import firebase from 'firebase';

export default {
    name: 'dashboard',
    data () {
        return{
            cars:[]
        }
    },
    created () {
        alert(firebase.auth().currentUser.uid);
        db.collection('vehicles').where("uid","==",firebase.auth().currentUser.uid).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // console.log(doc.data());
                const data = {
                   'id': doc.id,
                   'vehicle_id': doc.data().vehicle_id,
                   'name' : doc.data().mark,
                   'model' : doc.data().model,
                   'km' : doc.data().mileage,
                   'years' : doc.data().year
                }
                this.cars.push(data);
            })
        })
    }    
}
</script>