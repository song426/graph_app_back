const router = require("express").Router(); //express 모듈에서 제공하는 Router 클래스를 사용
const visitorsRoute = require("../controllers/visitorsCtrl"); //salesMapCtrl.js파일을 salesMapRoute 변수로 가져오기

router.get("/visitors", visitorsRoute.getVisitors);

module.exports = router; //router를 모듈로 내보내기
