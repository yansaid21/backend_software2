const EXPRESS = require("express");
const superhero_routes_access = require("./superhero.routes");
const routes = EXPRESS.Router();

const routes_APP = (APP) => {
  /* http://localhost:3000/api/v1 */
  APP.use("/api/v1", routes);

  /* http://localhost:3000/api/v1/superheros */
  routes.use("/superheros", superhero_routes_access);
};

module.exports = routes_APP;
