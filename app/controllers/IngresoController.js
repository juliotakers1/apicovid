const Ingreso = require('../models/Ingreso');

function index(req,res){
    Ingreso.find({}) 
    .then(ingresos =>{
        if(ingresos.length) return res.status(200).send({ingresos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.ingresos) return res.status(404).send({message: 'not found'});
    let ingresos = req.body.ingresos;
    return res.status(200).send({ ingresos});
}

function create(req,res){
    console.log(req.body);
    new Ingreso(req.body).save().then(ingreso => res.status(201).send({ingreso})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.ingresos) return res.status(404).send({message: 'not funsito'});
    let ingreso = req.body.ingresos[0];
    ingreso = Object.assign(ingreso, req.body);
    ingreso.save().then(ingreso =res.status(200).send({message:'UPDATED', ingreso})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.ingresos) return res.status(404).send({message: 'no funcio'});
    req.body.ingresos[0].remove().then(ingreso => res.status(200).send({message:'eliminao',ingreso})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Ingreso.find(query).then(ingresos =>{
        if(!ingresos.length) return next();
        req.body.ingresos = ingresos;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}