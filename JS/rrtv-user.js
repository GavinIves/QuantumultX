var body = $response.body;
var url = $request.url;

var obj = JSON.parse(body);
obj.data = {
    "user": {
        "id": 174998837,
        "headImgUrl": "",
        "isConfirmed": false,
        "roleInfo": "normal",
        "level": 3,
        "levelStr": "邂逅美剧",
        "sex": 2,
        "confirmInfo": "",
        "replyCount": 0,
        "articleCount": 0,
        "favoriteCount": 0,
        "silverCount": 10,
        "achievementCount": 0,
        "hasSignIn": false,
        "sign": "",
        "birthday": "2000-01-01",
        "city": "",
        "loginFrom": null,
        "token": null,
        "mobile": "18550587393",
        "nickName": "IVES-",
        "isSilence": false,
        "silenceMsg": "",
        "isBlack": false,
        "score": 519,
        "continuousDay": 0,
        "fansCount": 0,
        "focusUserCount": 0,
        "seriesCount": 0,
        "actorCount": 0,
        "focus": false,
        "wmSign": null,
        "medalList": [{
        "name": "大魔王",
        "endTime": "2030-01-01 22:58:20",
        "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
        "id": 1
        }, {
        "name": "小蜜蜂",
        "endTime": "2030-01-01 22:58:20",
        "imgUrl": "http://img.rr.tv/screenshot/20171108/o_1510127551022.png",
        "id": 2
        }],
        "privilegeList": [{
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "originalPainting",
        "func": "originalPainting",
        "description": "解锁原画",
        "icon": "jiesuoyuanhua",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "mall",
        "action": "sale",
        "function": "mallDiscount",
        "func": "mallDiscount",
        "description": "龙醇商城九折",
        "icon": "longchunshangcheng",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "article",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮发帖",
        "icon": "gaoliangfatie",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "nickName",
        "action": "show",
        "function": "nameHighLight",
        "func": "nameHighLight",
        "description": "高亮昵称",
        "icon": "gaoliangnicheng",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "comment",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮评论回复",
        "icon": "huifu",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "danmu",
        "action": "send",
        "function": "superBarrageBlue",
        "func": "superBarrageBlue",
        "description": "超级弹幕",
        "icon": "chaojidanmu",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "growth",
        "action": "play",
        "function": "0.15",
        "func": "0.15",
        "description": "看剧经验+15%",
        "icon": "jingyanzhijiacheng",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "growth",
        "action": "play",
        "function": "0.5",
        "func": "0.5",
        "description": "看剧经验+50%",
        "icon": "jingyanzhijiacheng",
        "endTime": 1644418699741
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "vipVideo",
        "func": "vipVideo",
        "description": "勋章专享剧集",
        "icon": "zhuanxiangjuji",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "growth",
        "action": "play",
        "function": "0.4",
        "func": "0.4",
        "description": "看剧经验+40%",
        "icon": "jingyanzhijiacheng",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "noLimit",
        "func": "noLimit",
        "description": "看剧无限制",
        "icon": "kanjuwuxianzhi",
        "endTime": 1627301900000
        }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "noAd",
        "func": "noAd",
        "description": "看剧无广告",
        "icon": "kanjuwuguanggao",
        "endTime": 1627301900000
        }],
        "createTime": 1612195825000,
        "newUser": false,
        "certLabel": null,
        "certNote": null,
        "vipMedal": {
        "name": "大魔王",
        "endTime": "2030-01-01 22:58:20",
        "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
        "id": 1,
        "isExpired": false
        }
    }
};

$done({body: JSON.stringify(obj)});