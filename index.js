const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const{ PORT } = process.env
// Syncing all the models at once.
conn.sync({force:false}).then(async() => {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
