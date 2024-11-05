const router = require("express").Router();
const VolumeServicesRoute = require("../controllers/volumeServicesCtrl");
router.get("/VolumeServices", VolumeServicesRoute.getVolumeServices);

module.exports = router;
