<template>
    <div>
        <h1>Register From</h1>
        <p>Username : <input type="text" v-model="username"></p>
        <p>Password : <input type="text" v-model="password"></p>
        <button type="submit" @click="Register">Submit Data</button>
    </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import Vue from 'vue'
import axios from "axios";

export default {
    name:"Regis",
    setup(){
        const username = ref("")
        const password = ref("")

        function Register(){
            // console.log(username.value);
            // console.log(password.value);
            
            
            
            axios.post('http://localhost:8100/api/createUser',{username:username.value,password:password.value}).then(function (response) {

                
                // const code_alert = response.data.responseBody.responseCode
                console.log(response.data.responseBody.responseCode);
                
                console.log(response.data.responseBody.massage);
                
                if(response.data.responseBody.responseCode === 204){
                    alert(`Message is : ${response.data.responseBody.massage}`);
                }
                else{
                    alert('Message is : Register Success');
                }
                // console.log(response.data.responseBody.responseCode);
                

            })
            .catch(function (error) {
                alert(error);
            });
        }

        return{
            username,
            password,
            Register
        }
    }
    
}
</script>