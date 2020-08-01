<template>
    <div id="new-car">
        <h3>Dodaj vozilo</h3>
        <div class="row">
            <form @submit.prevent="saveVehicle" class="col s12">
                <div class="row">
                    <div class="input-field col s3">
                        <input type="text" v-model="vehicle_id" required>
                        <label for="">Registracija</label>
                    </div>
                    <div class="input-field col s3">
                        <label for="">Tip vozila</label><br>
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
                        <label>Marka</label>
                      
                    </div>
                    <div class="input-field col s3">
                          <input type="text" v-model="model" name="model" required>
                        <label>Model</label>
                    </div>
                </div>               
                <div class="row">
                    <div class="input-field col s4">
                        <input type="text" v-model="mileage" required>
                        <label for="">Kilometraza</label>
                    </div>
                     <div class="input-field col s4">
                        <input type="date" v-model="registration" required>
                        <label for="">Datum Registracije</label>
                    </div>
                     <div class="input-field col s4">
                        <input type="text" v-model="year" required>
                        <label for="">Godiste</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
        
    </div>
</template>

<script>
import db from './firebaseInit';
export default {
    name: 'new-vehicle',
    data () {
         return{
           mark: null,
           mileage : null,
           model : null,
           registration: null,
           type: null,
           vehicle_id: null,
           year : null
        }
    },
    methods:{
        saveVehicle(){
            db.collection('vehicles').add({
                created_at : Date.now(),
                mark: this.mark,
                mileage : this.mileage,
                model : this.model,
                registration: this.registration,
                type: this.type,
                vehicle_id: this.vehicle_id,
                year : this.year
            }).then(this.$router.push('/'))
            .catch(err => console.log(err))
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