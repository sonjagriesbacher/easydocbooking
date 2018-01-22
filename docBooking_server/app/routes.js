var User = require('./models/User');
var Doctor = require('./models/Doctor');
var Termin = require('./models/Termin');

module.exports = function(app) {

    app.get('/facharztbezeichnung', (req, res) => {
        Doctor.find({},function(error,doctors){
            if(error) res.send(error);
            console.log("getDoktorsMethodeAufgerufen");
            res.json(doctors);
        })
    });
    app.get('/arztwahl', (req, res) => {
        Doctor.find({},function(error,doctors){
            if(error) res.send('Error' + error);
            console.log("getDoktorsMethodeAufgerufen");
            res.json(doctors);
        })
    });

    app.get('/', (req, res) => {
        User.find({},function(error,users){
            if(error) res.send(error);
            console.log("getUsersMethodeAufgerufen");
            res.json(users);
        })
    });
    app.get('/termins', (req, res) => {
        Termin.find({},function(error,termins){
            if(error) res.send(error);
            console.log("getTerminsMethodeAufgerufen");
            res.json(termins);
        })
    });

// Brauchen wir das wirklich? Wir schreiben keine Ärzte aus der Anwendung raus
    app.post('/doctors', (req, res) => {
        var doktor = new Doctor({fachbezeichnung: req.body.fachbezeichnung,
            titel:req.body.titel,
            name:req.body.name,
            vorname:req.body.vorname,
            strasse:req.body.strasse,
            nummer:req.body.nummer,
            plz:req.body.plz,
            ort:req.body.ort,
            telefon:req.body.telefon});
        doktor.save();
        res.status(200).end();
    });


    /*app.post('/facharztbezeichnung', (req, res) => {
        var user= new User({
            vorname: req.body.vorname,
            nachname: req.body.nachname,
            email: req.body.email,
            benutzername: req.body.benutzername,
            passwort: req.body.passwort,
            plz: req.body.plz,
            ort: req.body.ort
        });
        user.save();
        res.status(200).end();
    });*/

    app.post('/facharztbezeichnung', (req, res) => {
        User.create({
            vorname: req.body.vorname,
            nachname: req.body.nachname,
            email: req.body.email,
            benutzername: req.body.benutzername,
            passwort: req.body.passwort,
            plz: req.body.plz,
            ort: req.body.ort
        }, function (error, user) {
            if(error) res.send(error);

            User.find(function (error, users) {
                if(error) res.send(error);

                res.json(users);
            });
        });
    });

//Brauchen wir das wirklich? Wir schreiben ja nicht aus der Anwendung raus
    app.post('/termins', (req, res) => {
        var termin = new Termin({
            idUser:req.body.nameDoktor,
            idDoctor:req.body.datum,
            datum:req.body.uhrzeit
        });
        termin.save();
        res.status(200).end();
    });


    app.get('*', (req, res) => {
        res.sendFile('./public/index.html');
    });

};