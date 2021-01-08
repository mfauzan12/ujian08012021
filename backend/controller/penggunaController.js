const Penggunas = require('../model/penggunaModel');

exports.addPenggunas = (req, res) =>{

    let {name,phone,email,address} = req.body;

     let pengguna = new Penggunas({
         name: name,
         phone: phone,
         email: email,
         address: address
     })

     pengguna.save().then(doc => {
         res.status(200).send("Berhasil memasukkan data" + doc);
     }).catch(err => {
         res.status(500).send("Gagal insert data"+err);
     })
    }


exports.getAllPengguna = async(req,res)=>{

        let dataHasil = await Penggunas.find();
        res.status(200).json({

        status : "success",
        dataLength : dataHasil.length,
        timestamp : req.requestTime,
        data : dataHasil
        });
    }

    exports.getAllPenggunaByName = async(req,res)=>{

        let name = req.params.name;

        let dataHasil = await Penggunas.find({name : {$regex : name, $options : 'i'}});
        res.status(200).json({

            status : "success",
            dataLength : dataHasil.length,
            timestamp : req.requestTime,
            data : dataHasil
            });
    }

    exports.getAllPenggunaByPhone = async(req,res)=>{

        let phone = req.params.phone;

        let dataHasil = await Penggunas.find({phone : {$regex : phone, $options : 'i'}});
        res.status(200).json({

            status : "success",
            dataLength : dataHasil.length,
            timestamp : req.requestTime,
            data : dataHasil
            });
    }

    exports.getAllPenggunaByEmail = async(req,res)=>{

        let email = req.params.email;

        let dataHasil = await Penggunas.find({email : {$regex : email, $options : 'i'}});
        res.status(200).json({

            status : "success",
            dataLength : dataHasil.length,
            timestamp : req.requestTime,
            data : dataHasil
            });
    }

    exports.getAllPenggunaByAddress = async(req,res)=>{

        let address = req.params.address;

        let dataHasil = await Penggunas.find({address : {$regex : address, $options : 'i'}});
        res.status(200).json({

            status : "success",
            dataLength : dataHasil.length,
            timestamp : req.requestTime,
            data : dataHasil
            });
        }

    exports.updateDataPenggunasById = async(req,res)=>{

                console.log(req.body)
                await Penggunas.findByIdAndUpdate(req.params.id,req.body,function (err,docs){
                    if(err){
                        console.log(err)
                        res.status(400).json(err);
                    }
                    else{
                        console.log("updated pengguna : ",docs);
                        res.status(200).json(docs);
                    }
                })
            }

    exports.deleteDataPenggunasById = async(req,res)=>{
        await Penggunas.findByIdAndDelete(req.params.id,function (err,docs){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            else{
                console.log("deleted pengguna : ",docs);
                res.status(200).json(docs);
            }
        })
    }
