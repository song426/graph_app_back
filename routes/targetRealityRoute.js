const router = require("express").Router();
const targetRealityRoute = require("../controllers/target_realityCtrl");
router.get("/targetReality", targetRealityRoute.getTargetReality);

module.exports = router;
