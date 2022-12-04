const Egreso = require('../models/Egreso');

function index(req,res){
    Egreso.find({}) 
    .then(egresos =>{
        if(egresos.length) return res.status(200).send({egresos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.egresos) return res.status(404).send({message: 'not found'});
    let egresos = req.body.egresos;
    return res.status(200).send({ egresos});
}

function create(req,res){
    console.log(req.body);
    new Egreso(req.body).save().then(egreso => res.status(201).send({egreso})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.egresos) return res.status(404).send({message: 'not funsito'});
    let egreso = req.body.egresos[0];
    egreso = Object.assign(egreso, req.body);
    egreso.save().then(egreso =res.status(200).send({message:'UPDATED', egreso})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.egresos) return res.status(404).send({message: 'no funcio'});
    req.body.egresos[0].remove().then(egreso => res.status(200).send({message:'eliminao',egreso})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Egreso.find(query).then(egresos =>{
        if(!egresos.length) return next();
        req.body.egresos = egresos;
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