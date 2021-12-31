const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN}); // make API request
let servers = await lib.discord.guilds['@0.1.0'].list({
  limit: 100,
});
let result = await lib.discord.users['@0.1.1'].me.status.update({
  activity_name: `${servers.length === 100 ? servers.length + '' : servers.length} server`, // required
  activity_type: 'GAME', //Types : GAME , LISTENING , WATCHING , COMPETING
  status: 'ONLINE', //Types : ONLINE , DND , IDLE
});

/*
Endpoint type : Scheduler _ Once a minute
Change status with server count in bot status
Server Count Code : ${servers.length === 100 ? servers.length + '' : servers.length}
*/
