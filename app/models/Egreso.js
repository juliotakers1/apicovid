const mongoose = require('mongoose');
const EgresoSchema = new mongoose.Schema({

    carnet:{
        type: String,
        required: false
    },
    fechaEgreso:{
      type: String,
      required:true,
    },
      nombres:{
        type: String,
        required: false 
      },
      apellidos:{
        type: String,
        required: false 
      },
      sexo:{
        type: String, 
        required: false
      },
      edad:{
        type: String,
        required: false 
      },
      diagnostico:{
        type: String,
        required: false 
      },
      estado:{
        type: String,
        required: false 
      },
      tipoEgreso:{
        type: String,
        required: false
      },
      traslado:{
        type: String,
        required: false
      },
      rangoEdad:{
        type: String,
        required: false
      },
      indicacionEgreso:{
        type: String,
        required: false
      },
      infeccion:{
        type: String,
        required: false
      },
      vacunas:{
        type: String,
        required: false
      },
      dosis:{
        type: String,
        required: true
      },
      horario:{
        type: String,
        required: false 
      },
      status:{
        type: Boolean,
        default:false,
        required: true
      },
      encargado:{
        type: String,
        required: false 
      },
      usuario:{
        type: String,
        required: false 
      } 
//se agrego infeccion tipo greso
}); 

const Egreso = mongoose.model('Egreso',EgresoSchema);
 
module.exports = Egreso;