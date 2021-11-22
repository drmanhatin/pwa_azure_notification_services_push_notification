<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <p> {{qtoken}} </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import {initializeApp} from 'firebase/app';	
import {getMessaging, getToken} from 'firebase/messaging';	

@Options({
  components: {
    HelloWorld,
  }, 


  
})

export default class App extends Vue {
  
  qtoken = "soup";

  created() {
    
const config = {
    apiKey: "AIzaSyBUYH2xvgKHWyeNObgso8SGxtKCQh6ho_c",
    authDomain: "pushnotificationtest-d898b.firebaseapp.com",
    projectId: "pushnotificationtest-d898b",
    storageBucket: "pushnotificationtest-d898b.appspot.com",
    messagingSenderId: "656515302710",
    appId: "1:656515302710:web:64f8cb41090f40cfb39f97"
  };
  
  const app = initializeApp(config);
  
  const messaging = getMessaging(app);
  
  getToken(messaging).then(token => {
    this.qtoken = token;
    console.log("my token is", token);
  });
  
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
