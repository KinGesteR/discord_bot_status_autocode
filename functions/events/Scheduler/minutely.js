const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN}); // make API request
let servers = await lib.discord.guilds['@0.1.0'].list({
  limit: 100,
});
let result = await lib.discord.users['@0.1.1'].me.status.update({
  activity_name: `'help | ${servers.length === 100 ? servers.length + '' : servers.length} server | Verify Tick ??`, // required
  activity_type: 'GAME',
  status: 'ONLINE',
});

//Endpoint type : Scheduler _ Once a minute
//Change status with server count in bot status
