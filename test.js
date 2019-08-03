const fnt = require('./index.js');

var player = "Dark";

fnt.getStats(player, "pc", (err, result) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("\nALL STATS---");
        console.log("name: " + result.accountName);
        console.log("platform: " + result.platform);
        console.log("skin: " + result.skinUrl);
        console.log("score: " + result.score);
        console.log("kills: " + result.kills);
        console.log("wins: " + result.wins);
        console.log("matches: " + result.matches);
        console.log("top3: " + result.top_3_5_10);
        console.log("top6: " + result.top_6_12_25);
        console.log("kd: " + result.kd);
        console.log("wr: " + result.wr);
        console.log("playtime: " + result.minutesPlayed);
    }
});

/*
fnt.getStatsSolo(player, "pc", (err, result) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("\nSOLO STATS---");
        console.log("name: " + result.accountName);
        console.log("platform: " + result.platform);
        console.log("skin: " + result.skinUrl);
        console.log("score: " + result.score);
        console.log("kills: " + result.kills);
        console.log("wins: " + result.wins);
        console.log("matches: " + result.matches);
        console.log("top3: " + result.top_3_5_10);
        console.log("top6: " + result.top_6_12_25);
        console.log("kd: " + result.kd);
        console.log("wr: " + result.wr);
        console.log("playtime: " + result.minutesPlayed);
    }
});

fnt.getStatsDuo(player, "pc", (err, result) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("\nDUO STATS---");
        console.log("name: " + result.accountName);
        console.log("platform: " + result.platform);
        console.log("skin: " + result.skinUrl);
        console.log("score: " + result.score);
        console.log("kills: " + result.kills);
        console.log("wins: " + result.wins);
        console.log("matches: " + result.matches);
        console.log("top3: " + result.top_3_5_10);
        console.log("top6: " + result.top_6_12_25);
        console.log("kd: " + result.kd);
        console.log("wr: " + result.wr);
        console.log("playtime: " + result.minutesPlayed);
    }
});

fnt.getStatsSquad(player, "pc", (err, result) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("\nSQUAD STATS---");
        console.log("name: " + result.accountName);
        console.log("platform: " + result.platform);
        console.log("skin: " + result.skinUrl);
        console.log("score: " + result.score);
        console.log("kills: " + result.kills);
        console.log("wins: " + result.wins);
        console.log("matches: " + result.matches);
        console.log("top3: " + result.top_3_5_10);
        console.log("top6: " + result.top_6_12_25);
        console.log("kd: " + result.kd);
        console.log("wr: " + result.wr);
        console.log("playtime: " + result.minutesPlayed);
    }
});
*/
