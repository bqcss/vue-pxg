使用vue-cli 
  
  vue init webpack XXX 除了使用vue-router其他都是no

增加 vux 作为ui

  根据官网修改webpack.base配置以使用vux ,注：vux-loader 
  由于vux样式是基于less 我本人使用sass 。同时安装 之

  meta标签：移动优先
  基础样式使用vux里的reset

使用axios mockjs作为模拟数据。mockjs不是必须，只是为了方便

项目目录整理：
  /.idea 
    logs/放入项目的进程说明
    readme 项目的个人想法
  --------------------------
  /src/
    assets/放置资源的文件夹包括css image icon等资源
    page/放页面分类的地方
    router/是管理总路由的
    ----------------------
    server/后台数据模拟，目前供mockjs消费,之后供axios使用
    --------------------
    store/状态管理


