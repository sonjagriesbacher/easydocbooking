
/*
populate DB with sample data on server start
*/


'use strict';

import {Seeder} from 'mongoose-data-seed';
import {Doctor} from 'models/Doctor';

Doctor.find({}).removeAsync()
    .then(() =>{
    Doctor.create({

        fachbezeichnung:'Hautarzt',
    titel:'Dr.med.',
    name:'Rief',
    vorname:'Peter',
    strasse:'Salinstraße',
    nummer:'11',
    plz:'83022',
    ort:'Rosenheim',
    telefon:'08031 16869',
    }),
        Doctor.create({

            fachbezeichnung:'Hautarzt',
            titel:'Dr.med.',
            name:'Rief',
            vorname:'Peter',
            strasse:'Salinstraße',
            nummer:'11',
            plz:'83022',
            ort:'Rosenheim',
            telefon:'08031 16869',
        })
});