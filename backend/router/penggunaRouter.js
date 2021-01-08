const express = require('express');
const bodyParser = require('body-parser');

const penggunaController = require('../controller/penggunaController')

const penggunaRouter = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

penggunaRouter.route('/').post(urlencodedParser,penggunaController.addPenggunas).get(penggunaController.getAllPengguna);

penggunaRouter.route('/findname/:name').get(penggunaController.getAllPenggunaByName);
penggunaRouter.route('/findphone/:phone').get(penggunaController.getAllPenggunaByPhone);
penggunaRouter.route('/findemail/:email').get(penggunaController.getAllPenggunaByEmail);
penggunaRouter.route('/findaddress/:address').get(penggunaController.getAllPenggunaByAddress);

penggunaRouter.route('/').patch(urlencodedParser,penggunaController.updateDataPenggunasById).delete(urlencodedParser,penggunaController.deleteDataPenggunasById);

module.exports = penggunaRouter;
