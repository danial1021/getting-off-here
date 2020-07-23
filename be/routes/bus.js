var express = require('express');
var router = express.Router();

router.get('/bus', function(req, res, next) { //버스 목록 조회(검색할때 ?) 버스이름 예: 진월75 랑 각 종점 와 노선id를 보냄

});

router.get('/:bus', function(req, res, next) { //버스 상세 조회 노선 id 보낸걸 그대로 보내주시면 됩니다.  이름 , 첫차 막차 간격을 보냄
});

router.get('/:bus/bustop', function(req, res, next) { //버스가 다니는 버스 정류장 조회 버스가 다니는 정류장 목록을 보내줌

});

/*
정류장 예시
{
    ["송정공원역", "공항역",  '''''' , "송정공원역"]
}

*/

module.exports = router;