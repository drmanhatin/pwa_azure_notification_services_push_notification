var azure = require('azure-sb');

var notificationHubService = azure.createNotificationHubService('pwahub','Endpoint=sb://pwaname.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=Ef0WLZiN4XbVZ2oTLAg5fBoquiwefvEfybkmqkzSJIE=');

var payload = {
  data: {
    message: 'Hello!'
  }
};

notificationHubService.gcm.send(null, payload, function(error){
  if(!error){
    console.log("notification sent")
    //notification sent
  }
  
  else {
    console.log(error);
  }
});
