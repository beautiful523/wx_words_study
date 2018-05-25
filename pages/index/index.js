Page({

  data: {
    showVersion: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectDataVersion: ['人教新版','人教PEP','苏教版','牛津版','朗文版'],//下拉列表的数据

    indexVersion: 0,//选择的下拉列表下标
    showGrade: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectDataGrade: ['三年级', '四年级', '五年级', '六年级'],//下拉列表的数据
    indexGrade: 0//选择的下拉列表下标
  },

  // 点击版本下拉显示框
  selectTapVersion() {
    this.setData({
      showVersion: !this.data.showVersion  //每点击一次已选择框，show的值就取反一次
    });
  },
  // 点击版本下拉列表
  optionTapVersion(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    wx.setStorageSync('indexVersion', Index) //在本地存储值，刷新时可取本地记录的值
    this.setData({
      indexVersion: Index,
      showVersion: !this.data.showVersion
    });
  },

  // 点击年级下拉显示框
  selectTapGrade() {
    this.setData({
      showGrade: !this.data.showGrade  //每点击一次已选择框，show的值就取反一次
    });
  },
  // 点击年级下拉列表
  optionTapGrade(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    wx.setStorageSync('indexGrade', Index) //在本地存储值，刷新时可取本地记录的值
    this.setData({
      indexGrade: Index,
      showGrade: !this.data.showGrade
    });

  },
  onLoad: function (options) {
    // 获取缓存的版本数据
    var IndexVersion = wx.getStorageSync('indexVersion');
    if (IndexVersion) {
      this.setData({
        indexVersion: IndexVersion
      })
    };

    // 获取缓存的年纪数据
    var IndexGrade = wx.getStorageSync('indexGrade');
    if (IndexGrade) {
      this.setData({
        indexGrade: IndexGrade
      })
    };
  }

})