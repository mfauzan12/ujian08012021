const mongodb = require('mongoose')

const PenggunaDB = new mongodb.Schema({

    name: {
        type: String,
        required : [true, "Insert Your Name"],
        unique : true

    },phone : {
        type : String,

    },email : {
        type : String,
    
    },address : {
            type : String
        }


});

const Penggunas = mongodb.model('pengguna',PenggunaDB);

module.exports = Penggunas;