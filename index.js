/* Utilizamos dos dependencias */
const EXPRESS = require("express");
const MONGOOSE = require("mongoose");
const ROUTES_APP = require("./src/routes");

/* Accedemos a la configuración del archivo .env */
require("dotenv").config();

const APP = EXPRESS();
const PORT = 3000;

APP.listen(PORT, () => console.log(`Connect for port ${PORT}`));

MONGOOSE.set("strictQuery", false);

/* Mongoose: Conectar con la BD NoSQL Mongo (Connect()) */
MONGOOSE.connect(process.env.STRING_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Success connection"))
  .catch((err) => console.error(err));

APP.use(EXPRESS.json());
ROUTES_APP(APP);
