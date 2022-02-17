// pages/home/home.js
Page({
  getUserInfo(e) {
    console.log('用户名称', e.detail.userInfo.nickName)
    console.log('用户头像', e.detail.userInfo.avatarUrl)
    console.log('用户性别', e.detail.userInfo.gender)

    this.setData({
      name: e.detail.userInfo.nickName
    })
},

  /**
   * 页面的初始数据
   */
  data: {
    name:"curry",
    student:[
      {
        name:"curry",
        age:32
      },
      {
        name:'durant',
        age:33
      }
    ],
    counter:0
  },
  monitor()
  {
    this.setData({
      counter:this.data.counter+=1
    })
  },

  subtranction()
  {
    this.setData({
      counter:this.data.counter-=1
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})