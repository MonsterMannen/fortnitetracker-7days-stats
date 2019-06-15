# fortnitetracker-7days-stats

![npm](https://img.shields.io/npm/dt/fortnitetracker-7days-stats.svg?style=flat)
![npm](https://img.shields.io/npm/v/fortnitetracker-7days-stats.svg)
![David](https://img.shields.io/david/monstermannen/fortnitetracker-7days-stats.svg)

Node module for obtaining the last 7 days stats from fortnitetracker.com  


## Installation

```
npm install fortnitetracker-7days-stats
```

## Example usage

Platforms: `pc`, `psn`, `xbl`

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

### Stats for specific queue type

All queues: `getStats(user, platform, callback)`  
Solo: `getStatsSolo(user, platform, callback)`  
Duo: `getStatsDuo(user, platform, callback)`  
Squad: `getStatsSquad(user, platform, callback)`  
