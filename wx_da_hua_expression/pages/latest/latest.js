// latest.js
var Api = require('../../utils/api.js');

var global_page
Page({
  data: {
    title: '最新话题',
    latest: [],
    hidden: false,
  },
  onPullDownRefresh: function () {
    this.fetchData();
    console.log('onPullDownRefresh', new Date())
  },
  // 事件处理函数
  redictDetail: function(e) {
    // var id = e.currentTarget.id,
    //   url = '../detail/detail?id=' + id;
   
    var url = '../editor/editor';
    wx.navigateTo({
      url: url
    })
  },
  fetchData: function() {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getLatestTopic({
        p: 1
      }),
      success: function(res) {
        console.log(res);
        that.setData({
          latest: res.data
        })
        setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function () {
    // this.fetchData();
    global_page = this
    this.fetchExpress();
    
  },
  fetchExpress:function() {
    var that = this;
    that.setData({
      latest: [
        {member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img3.imgtn.bdimg.com/it/u=3903157596,3789827809&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=1414733317,542758485&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=2355442825,1034056032&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=961666295,1941975572&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=4286943230,2152721706&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img.itlun.cn/uploads/allimg/150708/1-150FQ40144.gif"}
        },{member:{
          "avatar_normal":"http://upload.86628677.com/gifa/20150915/6a0544.gif"}
        },{member:{
          "avatar_normal":"http://img0.pconline.com.cn/pconline/1403/16/4445916_2013041711400540071.gif"}
        },{member:{
          "avatar_normal":"http://img0.imgtn.bdimg.com/it/u=288514605,1240644921&fm=21&gp=0.jpg"}
        },

        {member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img3.imgtn.bdimg.com/it/u=3903157596,3789827809&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=1414733317,542758485&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=2355442825,1034056032&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=961666295,1941975572&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=4286943230,2152721706&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img.itlun.cn/uploads/allimg/150708/1-150FQ40144.gif"}
        },{member:{
          "avatar_normal":"http://upload.86628677.com/gifa/20150915/6a0544.gif"}
        },{member:{
          "avatar_normal":"http://img0.pconline.com.cn/pconline/1403/16/4445916_2013041711400540071.gif"}
        },{member:{
          "avatar_normal":"http://img0.imgtn.bdimg.com/it/u=288514605,1240644921&fm=21&gp=0.jpg"}
        },

        {member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img3.imgtn.bdimg.com/it/u=3903157596,3789827809&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=1414733317,542758485&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=2355442825,1034056032&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=961666295,1941975572&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=4286943230,2152721706&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img.itlun.cn/uploads/allimg/150708/1-150FQ40144.gif"}
        },{member:{
          "avatar_normal":"http://upload.86628677.com/gifa/20150915/6a0544.gif"}
        },{member:{
          "avatar_normal":"http://img0.pconline.com.cn/pconline/1403/16/4445916_2013041711400540071.gif"}
        },{member:{
          "avatar_normal":"http://img0.imgtn.bdimg.com/it/u=288514605,1240644921&fm=21&gp=0.jpg"}
        },

        {member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img3.imgtn.bdimg.com/it/u=3903157596,3789827809&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=1414733317,542758485&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=2355442825,1034056032&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=961666295,1941975572&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=4286943230,2152721706&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img.itlun.cn/uploads/allimg/150708/1-150FQ40144.gif"}
        },{member:{
          "avatar_normal":"http://upload.86628677.com/gifa/20150915/6a0544.gif"}
        },{member:{
          "avatar_normal":"http://img0.pconline.com.cn/pconline/1403/16/4445916_2013041711400540071.gif"}
        },{member:{
          "avatar_normal":"http://img0.imgtn.bdimg.com/it/u=288514605,1240644921&fm=21&gp=0.jpg"}
        },

        {member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img3.imgtn.bdimg.com/it/u=3903157596,3789827809&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=1414733317,542758485&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=2355442825,1034056032&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_large":"//cdn.v2ex.co/avatar/a8d9/a243/144294_large.png?m=1457670171",
          "avatar_mini":"//cdn.v2ex.co/avatar/a8d9/a243/144294_mini.png?m=1457670171",
          "avatar_normal":"http://img1.imgtn.bdimg.com/it/u=961666295,1941975572&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img4.imgtn.bdimg.com/it/u=4286943230,2152721706&fm=21&gp=0.jpg"}
        },{member:{
          "avatar_normal":"http://img.itlun.cn/uploads/allimg/150708/1-150FQ40144.gif"}
        },{member:{
          "avatar_normal":"http://upload.86628677.com/gifa/20150915/6a0544.gif"}
        },{member:{
          "avatar_normal":"http://img0.pconline.com.cn/pconline/1403/16/4445916_2013041711400540071.gif"}
        },{member:{
          "avatar_normal":"http://img0.imgtn.bdimg.com/it/u=288514605,1240644921&fm=21&gp=0.jpg"}
        },

      ],
    })

    // 300ms后，隐藏loading
    setTimeout(function() {
          that.setData({
            hidden: true
          })
    }, 300)
  },
})