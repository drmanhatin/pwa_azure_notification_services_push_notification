var azure = require('azure-sb');

//token which links device to the hub   
//this token is a firebase token
let token = "dBR0ECa442vfvy4LbU5XMb:APA91bGM2hB5FRRfJ8fmLEx1mjNCJcxmP3oyxEACVZfXVTjaiajbhWNABjGsgIh14GPeBJi9AiONTlpynBpSxA7dnZ-sepYgOKK0Q0CxKb6Q-AHGVwDDu2WCPq5-lKjaQYn_pp3j1Bhd";

var notificationHubService = azure.createNotificationHubService('pwahub','Endpoint=sb://pwaname.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=Ef0WLZiN4XbVZ2oTLAg5fBoquiwefvEfybkmqkzSJIE=');

const installation = 
    { 
        "installationId": "123123", 
        "userID": "MyAmazingUser",
        "tags": ["postvak1", "opvang1", "taal1", "categorie1"], 
        "platform": "GCM", 
        "pushChannel": token
    }  


const result = notificationHubService.createOrUpdateInstallation(installation, function(err, val, data) {
    console.log("error is", err, val, data);
})

console.log("result is", result);
