let body = $request.body
let url=$request.url
const randomFloat = Math.random()*0.0001;
if (url.includes("employee/location.serv")) {
body=JSON.parse(body)
body["body"]["gpslat"]=Number((31.360688169596311+randomFloat).toFixed(15))
body["body"]["gpslng"]=Number((120.4259554048311+randomFloat).toFixed(15))
body=JSON.stringify(body)
} else if (url.includes("employee/checkin.serv")) {
body=JSON.parse(body)
body["body"]["gpslat"]=(31.360688169596311+randomFloat).toFixed(6)
body["body"]["gpslng"]=(120.4259554048311+randomFloat).toFixed(6)
body=JSON.stringify(body)
}
$done({body})


