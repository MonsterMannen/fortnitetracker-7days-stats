# fortnitetracker-7days-stats
Node module for obtaining the last 7 days stats from fortnitetracker.com  


## Installation

```
npm install fortnitetracker-7days-stats
```

## Example usage

Available platforms: `pc`, `psn`, `xbl`

```javascript
const fnt = require('fortnitetracker-7days-stats');

fnt.getStats("MonsterMannen", "pc", (err, result) => {
    if(err){
        console.log(err.message);   // player not found
    }else{
        console.log("Wins in the last 7 days: " + result.wins);
    }
});

```

`result` has the following fields

```
result.accountName
result.platform
result.skinUrl
result.score
result.kills
result.wins
result.matches
result.top_3_5_10
result.top_6_12_25
result.kd
result.wr
result.minutesPlayed
```
