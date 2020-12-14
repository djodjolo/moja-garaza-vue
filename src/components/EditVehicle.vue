<template>
    <div id="edit-car">
          <h3>Izmeni karakteristike vozila</h3>
        <div class="row">
            <form @submit.prevent="updateVehicle" class="col s12">
                <div class="row">
                    <div class="input-field col s3">
                        <input type="text" v-model="vehicle_id" required>
                    </div>
                    <div class="input-field col s3">
                           <p>
                            <label>
                                <input name="group1" type="radio" v-model="type" value="car" checked />
                                <span>Automobil</span>
                            </label>
                        <br>
                            <label>
                                <input name="group1" type="radio" v-model="type" value="moto"  />
                                <span>Motor</span>
                            </label>
                        <br>
                            <label>
                                <input name="group1" type="radio" v-model="type" value="other"  />
                                <span>Ostalo</span>
                            </label>
                        </p>
                    </div>
                     <div class="input-field col s3">
                        <input type="text" v-model="mark" name="mark" required>
                      
                    </div>
                    <div class="input-field col s3">
                          <input type="text" v-model="model" name="model" required>
                    </div>
                </div>               
                <div class="row">
                    <div class="input-field col s4">
                        <input type="text" v-model="mileage" required>
                    </div>
                     <div class="input-field col s4">
                        <input type="date" v-model="registration" required>
                    </div>
                     <div class="input-field col s4">
                        <input type="text" v-model="year" required>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
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
        updateVehicle(){
            db.collection('vehicles').where('vehicle_id','==',this.$route.params.vehicle_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                     vehicle_id : this.vehicle_id,
                     created_a : this.created_at,
                     mark : this.mark,
                     mileage : this.mileage,
                     type :  this.type,
                     year : this.year,
                     model : this.model,
                     registration : this.registration
                    }).then(() => {
                        this.$router.push({name:'view-vehicle', params: {vehicle_id:this.vehicle_id}})
                    }) 
                })
            })
        }
    }    
}
</script>
<style scoped>
label:not(.browser-default){
    color:#2196F3 !important; 
}
label:not(.browser-default):focus{
    color:#2196F3 !important; 
}
input[type=text]:not(.browser-default){
    border-color: #2196F3;
}
input[type=text]:not(.browser-default):focus{
    border-color: #2196F3;
}
input[type=date]:not(.browser-default){
    border-color: #2196F3;
}
input[type=date]:not(.browser-default):focus{
    border-color: #2196F3;
}
</style>