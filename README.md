### Azure Notification Hub PWA Demo - works on Android, not iOS YET!! Web Push is apparently coming to iOS https://firt.dev/ios-15.4b#web-push-notification-on-ios
To try this:
1. Host pwa, easiest way to host it is by using an Azure Static Web App
2. Optionally, deploy PWA using pwabuilder.com and install PWA on device -> Video on how to do it here: https://www.youtube.com/watch?v=t7l_WwV2r88
3. Navigate to pwa on device and obtain device code 
4. register device using registerdevice.js (use device code)
5. send message using sendmessage.js
