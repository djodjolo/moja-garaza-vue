<template>
    <div id="view-car">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{mark}}</h4>
            </li>
            <li class="collection-item">
                Kilometraza: {{mileage}}
            </li>
        </ul>
        <router-link to="/" class="btn grey">Nazad</router-link>
        <button class="btn red" @click="deleteVehicle">Izbrisi</button>
          <div class="fixed-action-btn">
        <router-link v-bind:to="{name: 'edit-vehicle' , params : {vehicle_id: vehicle_id}}" class="btn-floating btn-large blue">
        <i class="fa fa-pencil"></i>
        </router-link>
    </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-car',
    data () {
        return{
           created_at : null,
           mark: null,
           mileage : null,
           model : null,
           registration: null,
           type: null,
           vehicle_id: null,
           year : null
        }
    },
    beforeRouteEnter (to, from, next) {
         db.collection('vehicles').where('vehicle_id','==',to.params.vehicle_id).get()
         .then(querySnapshot => {
             querySnapshot.forEach(doc => {
                 next(vm=>{
                     vm.vehicle_id = doc.data().vehicle_id;
                     vm.created_at = doc.data().created_at;
                     vm.mark = doc.data().mark;
                     vm.mileage = doc.data().mileage;
                     vm.type = doc.data().type;
                     vm.year = doc.data().year;
                     vm.model = doc.data().model;
                     vm.registration = doc.data().registration;
                 })
             })
         })
    },
    watch:{
        '$route':'fetchData'
    },
    methods: {
        fetchData(){
            db.collection('vehicles').where('vehicle_id','==',this.$route.params.vehicle_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.vehicle_id = doc.data().vehicle_id;
                     this.created_at = doc.data().created_at;
                     this.mark = doc.data().mark;
                     this.mileage = doc.data().mileage;
                     this.type = doc.data().type;
                     this.year = doc.data().year;
                     this.model = doc.data().model;
                     this.registration = doc.data().registration;
                })
            })
        },
        deleteVehicle(){
            if(confirm('Da li ste sigurni')){
                        db.collection('vehicles').where('vehicle_id','==',this.$route.params.vehicle_id).get()
                        .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                        doc.ref.delete();
                        this.$router.push('/');
                      })
                    })
            }
        }
    }    
}
</script>