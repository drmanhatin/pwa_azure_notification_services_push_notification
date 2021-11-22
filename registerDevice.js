var azure = require('azure-sb');

//token which links device to the hub   
//this token is a firebase token
let token = "fJ6-zUgvI_0nGX00zInvNj:APA91bHG6n5YQgx4vY9o86YY1jeJi_OOpsp6fmuIUB_GR8pMToZ7eK9HL6jWuvoy8rxd_8QbpEETdxa7F-ZdaLcG1lwa1g02nwk2w6zXIsj1ewjKzsw84kxsifie2d-VPcSCLJ3aiuOt";

var notificationHubService = azure.createNotificationHubService('pwahub','Endpoint=sb://pwaname.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=Ef0WLZiN4XbVZ2oTLAg5fBoquiwefvEfybkmqkzSJIE=');

const installation = 
    { 
        "installationId": "123456", 
        "userID": "MyAmazingUser",
        "tags": ["postvak1", "opvang1", "taal1", "categorie1"], 
        "platform": "GCM", 
        "pushChannel": token
    }  


const result = notificationHubService.createOrUpdateInstallation(installation, function(err, val, data) {
    console.log("error is", err, val, data);
})

console.log("result is", result);
