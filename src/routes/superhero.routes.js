const EXPRESS = require("express");
const superhero_model = require("../models/superhero_model");
const routes = EXPRESS.Router();

/* Función que permite crear un usuario */
routes.post("/", (req, res) => {
  const new_superhero = superhero_model(req.body);
  new_superhero
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

/* Función que permite listar usuario existentes */
routes.get("/", (req, res) => {
  superhero_model.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

/* Función que permite consultar un usuario específico */
routes.get("/:superheroId", (req, res) => {
  const {superheroId}=req.params;
  superhero_model
  .findById({_id: superheroId})
  .then((data) =>res.json(data))
  .catch ((err)=> res.json({ message: err }));
});
/* Función que permite editar un usuario específico */
routes.put("/:superheroId", (req, res) => {
  /* const {superheroId}= req.params; */
  const superheroId = req.params.superheroId;
  /* const{user_name, email, age, address} =req.body; */
  const query = {_id:superheroId0};
  const update = {$set: req.body};
  superhero_model.updateOne(query,update)
  .then((data)=>res.json(data))
  .catch((err)=>res.json({message:err}));
});

/* Función que permite eliminar un usuario específico */
routes.delete("/:superheroId", (req, res) => {
  const {superheroId}=req.params;
  superhero_model.deleteOne({_id: superheroId})
  .then((data)=>res.json(data))
  .catch((err)=>res.json({message:err}));
});

routes.delete("/", (req,res)=>{
const query = { superhero: { $regex: "Batman"}};
superhero_model
.deleteManiy(query)
.then((data)=>res.json(data))
.catch((err)=>res.json({message:err}));
});

routes.get("/superpowers-list/:property", (req,res)=>{
  const property =req.params.property;
  superhero_model
  .distinct(property)
  .then((data)=>res.json(data))
  .catch((err)=>res.json({message:err}));
  });
  
  routes.get("/:property/:limit", (req,res)=>{
    const property =req.params.property;
    const limit=parseInt(req.params.limit);
    superhero_model
    .distinct(property)
    .then((data)=>res.json(data.slice(0,limit)))
    .catch((err)=>res.json({message:err}));
    });

module.exports = routes;
