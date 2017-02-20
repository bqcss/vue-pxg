import axios from 'axios'
// 定义一个api接口
export default{
  getLists(cb){
    axios.get('/index/getList').then(function(res){
      // 判断是否请求成功
      if (res.data.data.code ==1000) {
              // 使用定时模拟请求时间
              setTimeout(function () {
                    cb(res.data.data.data);
            },300)
      }
    })
  }
}
