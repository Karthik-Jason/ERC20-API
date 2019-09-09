const express = require('express');
const router = express.Router();

let supremeController =  require('./supremeController.js');

router.post('/sendbronze',supremeController.sendbronze);
router.post('/sendsilver',supremeController.sendsilver);

router.post('/approvebronze',supremeController.approvebronze);
router.post('/approvesilver',supremeController.approvesilver);

router.post('/approveandcallbronze',supremeController.approveandcallbronze);
router.post('/approveandcallsilver',supremeController.approveandcallsilver);

router.post('/transferfrombronze',supremeController.transferfrombronze);
router.post('/transferfromsilver',supremeController.transferfromsilver);

router.get('/allowancebronze',supremeController.allowancebronze);
router.get('/allowancesilver',supremeController.allowancesilver);

router.get('/getbalancebronze',supremeController.getbalancebronze);
router.get('/getbalancesilver',supremeController.getbalancesilver);
router.get('/getbalancegold',supremeController.getbalancegold);

router.post('/buybronze',supremeController.buybronze);
router.post('/buysilver',supremeController.buysilver);


module.exports = router;
