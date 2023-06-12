const db = require('mongoose');

db.Promise = global.Promise;

async function connectDB(URI){
  await db.connect(URI,{
    dbName: 'ferry-tech-backend',
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('[db] DB conectada con éxito');
  })
  .catch(err => {
    console.error('[Date Base Connect] Error al conectar a la base de datos'+err);
    return process.exit(22);
});
};

module.exports = connectDB;