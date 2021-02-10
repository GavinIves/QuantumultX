var body = $response.body;
var url = $request.url;

var obj = JSON.parse(body);
obj.data = {
  "sortedItems": [{
    "qualityDescription": "高清",
    "qualityCode": "SD",
    "canPlay": true,
    "canShowVip": false,
    "initialQuality": true
  }, {
    "qualityDescription": "超清",
    "qualityCode": "HD",
    "canPlay": true,
    "canShowVip": false,
    "initialQuality": false
  }, {
    "qualityDescription": "原画",
    "qualityCode": "OD",
    "canPlay": true,
    "canShowVip": false,
    "initialQuality": false
  }, {
    "qualityDescription": "AI原画",
    "qualityCode": "AI_OD",
    "canPlay": true,
    "canShowVip": false,
    "initialQuality": false
  }]
};

$done({body: JSON.stringify(obj)});
