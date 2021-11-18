const config = {
    apiKey: "AIzaSyBUYH2xvgKHWyeNObgso8SGxtKCQh6ho_c",
    authDomain: "pushnotificationtest-d898b.firebaseapp.com",
    projectId: "pushnotificationtest-d898b",
    storageBucket: "pushnotificationtest-d898b.appspot.com",
    messagingSenderId: "656515302710",
    appId: "1:656515302710:web:64f8cb41090f40cfb39f97"
  };
  
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
  
  messaging
    .requestPermission()
    .then(() => {
      message.innerHTML = "Notifications allowed";
      return messaging.getToken();
    })
    .then(token => {
      tokenString.innerHTML = "Token Is : " + token;
      //subscribeTokenToTopic(token, "allUsers");
    })
    .catch(err => {
      errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
      console.log("Unable to get permission to notify", err);
    });
  
  