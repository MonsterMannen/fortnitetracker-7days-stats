const request = require('request');

exports.getStats = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/all/";
    url += encodeURIComponent(username);

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occurred :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("statsLast7") + 13);
        last7 = last7.substring(0, last7.indexOf('"matches":') - 5);

        // get text for account info
        var accountInfo = body.substring(body.indexOf('"playerInfo":') + 14);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf("statsV2IsPrivate") - 6);

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.displayName,
            platform: platform,
            skinUrl: jsonInfo.avatarUrl,
            score: jsonStats[0].stats.all[0].value,
            kills: jsonStats[0].stats.all[1].value,
            wins: jsonStats[0].stats.all[2].value,
            matches: jsonStats[0].stats.all[3].value,
            top_3_5_10: jsonStats[0].stats.all[4].value,
            top_6_12_25: jsonStats[0].stats.all[5].value,
            kd: jsonStats[0].stats.all[6].displayValue,
            wr: jsonStats[0].stats.all[7].value,
            minutesPlayed: jsonStats[0].stats.all[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}

// keep this for now
// maybe not possible to get these with new V2 stats?
/*
exports.getStatsSolo = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + encodeURIComponent(username) + "?p=p2";

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occurred :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("var imp_rollingStats") + 23);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // get text for account info
        var accountInfo = body.substring(body.indexOf("var imp_accountInfo") + 22);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf(";</script>"));

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.nickname,
            platform: jsonInfo.platform,
            skinUrl: jsonInfo.emblemUrl,
            score: jsonStats[0].value,
            kills: jsonStats[1].value,
            wins: jsonStats[2].value,
            matches: jsonStats[3].value,
            top_3_5_10: jsonStats[4].value,
            top_6_12_25: jsonStats[5].value,
            kd: jsonStats[6].displayValue,
            wr: jsonStats[7].value,
            minutesPlayed: jsonStats[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}

exports.getStatsDuo = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + encodeURIComponent(username) + "?p=p10";

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occurred :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("var imp_rollingStats") + 23);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // get text for account info
        var accountInfo = body.substring(body.indexOf("var imp_accountInfo") + 22);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf(";</script>"));

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.nickname,
            platform: jsonInfo.platform,
            skinUrl: jsonInfo.emblemUrl,
            score: jsonStats[0].value,
            kills: jsonStats[1].value,
            wins: jsonStats[2].value,
            matches: jsonStats[3].value,
            top_3_5_10: jsonStats[4].value,
            top_6_12_25: jsonStats[5].value,
            kd: jsonStats[6].displayValue,
            wr: jsonStats[7].value,
            minutesPlayed: jsonStats[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}

exports.getStatsSquad = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + encodeURIComponent(username) + "?p=p9";

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occurred :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("var imp_rollingStats") + 23);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // get text for account info
        var accountInfo = body.substring(body.indexOf("var imp_accountInfo") + 22);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf(";</script>"));

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.nickname,
            platform: jsonInfo.platform,
            skinUrl: jsonInfo.emblemUrl,
            score: jsonStats[0].value,
            kills: jsonStats[1].value,
            wins: jsonStats[2].value,
            matches: jsonStats[3].value,
            top_3_5_10: jsonStats[4].value,
            top_6_12_25: jsonStats[5].value,
            kd: jsonStats[6].displayValue,
            wr: jsonStats[7].value,
            minutesPlayed: jsonStats[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}
*/
