const mongoose = require('mongoose');
const IngresoSchema = new mongoose.Schema({

    carnet:{
        type: String,
        required: false
    },
    fechaIngreso:{
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
      tipoIngreso:{
        type: String,
        required: false
      },
      traslado:{
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
        default:true,
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
      //se agrego infeccion 
      
});

const Ingreso = mongoose.model('Ingreso',IngresoSchema);
 
module.exports = Ingreso;