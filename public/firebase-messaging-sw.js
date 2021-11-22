// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUYH2xvgKHWyeNObgso8SGxtKCQh6ho_c",
  authDomain: "pushnotificationtest-d898b.firebaseapp.com",
  projectId: "pushnotificationtest-d898b",
  storageBucket: "pushnotificationtest-d898b.appspot.com",
  messagingSenderId: "656515302710",
  appId: "1:656515302710:web:64f8cb41090f40cfb39f97"
};

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// console.log("serviceworker opened")
// // Handle incoming messages. Called when:
// // - a message is received while the app has focus
// // - the user clicks on an app notification created by a service worker
// //   `messaging.onBackgroundMessage` handler.

//   `messaging.onBackgroundMessage` handler.
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = "title is"+ payload.title;
  const notificationOptions = {
    body: "body is" + JSON.stringify(payload),
    icon: '/coalogo.jpg'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
