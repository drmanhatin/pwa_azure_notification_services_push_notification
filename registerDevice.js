var azure = require('azure-sb');

//token which links device to the hub   
//this token is a firebase token
let token = "fDh9NjWh5T_5Ger2C4jxxj:APA91bEL6eZIxZXYz5LN4GLLzvG01Ou3mSxgwwsUpyHaH7rAqZ5DQtiL7WJIW6SH0jfBPAFGaYxibcLYTxOQm_Z7aMtrRfR7FoHgOJDw_7RvAdQeU9YVgGZ32gxhOKVAKValhCktsVmj";

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
