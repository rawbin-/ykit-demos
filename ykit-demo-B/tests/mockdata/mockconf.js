module.exports = [{
    // pattern:'/api/list.json',
    // responder:'./data/listData.json'
}, {
    pattern: /^\/api\/(\w+)\.json.*$/,
    responder: './data/$1Data.mockjson'
}, {
    pattern: /^\/api\/(\w+)\.json.*$/,
    responder: './data/$1Data.js'
}, {
    pattern: '/api/list.json',
    responder: {
        "ret": true,
        "data": [{
            "name": "Li Lei",
            "email": "lilei@test.com",
            "registerDateTime": "2020-10-01 22:11:11"
        }, {
            "name": "Han Meimei",
            "email": "hanmeimei@test.com",
            "registerDateTime": "2020-10-01 22:11:11"
        }]
    }
}]