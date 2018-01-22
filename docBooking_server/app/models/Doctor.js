var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var doctorsSchema = mongoose.model('Doctor',{
    fachbezeichnung: {type: String},
    titel: {type: String},
    name: {type: String},
    vorname: {type: String},
    strasse: {type: String},
    nummer: {type: String},
    plz: {type: String},
    ort: {type: String},
    telefon: {type: String}

});

module.exports = doctorsSchema;

