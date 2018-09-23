Page({
  data:{
    initText: "this is demo's page"
  },
  click:function(){
    console.log('click')
    this.setData({initText: "click"+Date.now()})
  },
  onShow: function () {
    console.log('onShow')
    this.setData({ initText: "onShow" })
  },
  onLoad:function(){
    console.log('onLoad')
    this.setData({ initText: "onLoad" })
  },
  onReady:function(){
    console.log('onReady')
    this.setData({ initText: "onReady" })
  },
  onHide:function(){
    console.log('onHide')
    this.setData({ initText: "onHide" })
  },
  onUnload: function () {
    console.log('onUnload')
    this.setData({ initText: "onUnload" })
  },

})