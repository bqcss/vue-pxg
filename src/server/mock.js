var Mock = require('mockjs');
var Random = Mock.Random;

 Mock.mock(
    '/index/getList',
    {
        "data":{
            "code":"1000",
            "msg":"success",
            "data|10-11":[
                {
                    "name":"@cname",
                    "tag|1-3":["标签1"],
                    "userIcon":"@image",
                    "detail":"@cparagraph",
                    "imgGrounp|1-9":["@image"],
                    "articleId|+1":1
                },
            ]
        }
    }
)
export default Mock;