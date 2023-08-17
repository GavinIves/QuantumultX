let body = $request.body
let url=$request.url
if (url.includes("employee/location.serv")) {
body=JSON.parse(body)
body["body"]["gpslat"]=31.360688169596311
body["body"]["gpslng"]=120.4259554048311
body=JSON.stringify(body)
} else if (url.includes("employee/checkin.serv")) {
body=JSON.parse(body)
body["body"]["gpslat"]="31.360675"
body["body"]["gpslng"]="120.425975"
body=JSON.stringify(body)
}
$done({body})


