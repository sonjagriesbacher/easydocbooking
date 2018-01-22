var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
    vorname: {type:String},
    nachname:{type:String},
    email:{type:String},
    benutzername:{type:String},
    passwort:{type:String},
    plz:{type:String},
    ort:{type:String}

});

module.exports = mongoose.model('User', usersSchema);
