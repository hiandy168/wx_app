
var global_page
Page({
  data: {
    title: '最新话题',
    latest: [],
    hidden: false,
    miniHidden:true,
    treeHidden:true,
    new_image:"../../images/node_on.png",
    new_video:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",

    editorUrl:"", //预备编辑的图片
  },
    onLoad: function () {
    // this.fetchData();
    global_page = this
    // this.fetchExpress();
    
  }
})