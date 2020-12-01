<template>
    <div class="login">
        <p>Username : <input type="text" v-model="username"></p>
        <p>Password : <input type="password" v-model="pass"></p>
        <button type="submit" @click="Login">Sign in</button>
    </div>

    <div class="Input-data">
        <fieldset>
            <legend><p>Input Data</p></legend>
            <p>Username: {{username}}</p>

        </fieldset>
    </div>

    <div>
        <p>State Show Data :{{user.username}}</p>
    </div>

</template>


<script lang="ts">
import { ref, computed } from 'vue'
import store from "../store/data"
import {dataFack} from "../store/data"

import axios from "axios";

const data = 'http://localhost:8100/api/login';

export default {
    name:'Login',
    setup(){
        
        const username = ref("")
        const pass = ref("")

        
        const user  = computed(() => store.state.user)

        function Login(){

            

            axios.post(data,{username:username.value,password:pass.value}).then(function (response) {

                alert(`Message is : ${response.data.message}, ResponseCode : ${response.data.responseCode}`);
                

            })
            .catch(function (error) {
                alert(error);
            });
            
            store.state.user = { username: username.value }
        }

        return{
            username,pass,Login,user
        }
    }
}
</script>

<style  scoped>
.Input-data{
    padding: 20px 100px;
}
</style>