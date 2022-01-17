var azure = require('azure-sb');

//token which links device to the hub   
//this token is a firebase token
//generate this token using the vue app interface on your phone
let token = "yourdevicetokenhere";

var notificationHubService = azure.createNotificationHubService('pwahub','Endpoint=sb://pwaname.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=Ef0WLZiN4XbVZ2oTLAg5fBoquiwefvEfybkmqkzSJIE=');

const installation = 
    { 
        "installationId": "101", 
        "userID": "MyAmazingUser",
        "tags": ["postvak1", "opvang1", "taal1", "categorie1"], 
        "platform": "GCM", 
        "pushChannel": token
    }  


const result = notificationHubService.createOrUpdateInstallation(installation, function(err, val, data) {
    console.log("error is", err, val, data);
})

console.log("result is", result);
