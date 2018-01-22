var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var terminsSchema = mongoose.model('Termin', {
    nameDoctor: {type: String},
    datum: {type: String}, //derTag
    uhrzeit:{type: String}//dieUhrzeit


});

module.exports = terminsSchema;
