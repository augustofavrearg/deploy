import sequelize from './dbconnection.js';
import app from './app.js';


sequelize.sync({ force: false }).then(() => {
  const port = 4000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });

}).catch((error) => {
  console.error('Error al sincronizar modelos con la base de datos:', error);
});