const jsonServer = require('json-server');  // Importa json-server
const server = jsonServer.create();         // Crea un servidor
const router = jsonServer.router('db.json'); // Usa tu archivo db.json
const middlewares = jsonServer.defaults();  // Configuración por defecto

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;      // Configura el puerto (para Render)
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
