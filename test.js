const fnt = require('./index.js');

fnt.getStats("Savior Self", "pc", (err, result) => {
    if(err){
        console.log(err.message);
    }else{
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
