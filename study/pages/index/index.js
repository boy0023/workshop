//index.js
//获取应用实例
const app = getApp()

Page({
  data : {
    cont: [{ id: 1, shopname: "衣服" }, { id: 2, shopname: "裤子" }, { id: 3, shopname: "内衣" }, {
      id: 4, shopname: "服饰"
    }, { id: 1, shopname: "衣服" }, { id: 2, shopname: "裤子" }, { id: 3, shopname: "内衣" }, {
        id: 4, shopname: "服饰"
    }],
    content: [{ id: 1, name: "衣服" }, { id: 2, name: "裤子" }, { id: 3, name:"内衣"}, {
      id: 4, name: "服饰"
    }, { id: 1, name: "衣服" }, { id: 2, name: "裤子" }, { id: 3, name: "内衣"},{
        id: 4, name :"服饰"}],
      address     : "北四环东路97号",
      shopname    : "联大外卖",
      shownavindex: 0,
      is_open     : "no_one",
      is_show     :  "no_one"

  },

  onLoad: function () {
    console.log("*************onload***********");
  },

  classify: function(e){
    if(this.data.is_open == "classify"){
      this.setData({
        shownavindex: 0,
        is_open     : "no_one",
        is_show     :  "classify"
      });
    }else{
      this.setData({
        shownavindex: 1,
        is_open     : "classify",
        is_show     :  "classify"
      });
    }
  },

  list: function(e){
    if(this.data.is_open=="list"){
      this.setData({
        shownavindex: 0,
        is_open     : "no_one",
        is_show     :  "list"
      });
    }else{
      this.setData({
        shownavindex: 2,
        is_open     : "list",
        is_show     :  "list"
      });
    }
  },

  activity: function(e){
    if(this.data.is_open=="activity"){
      this.setData({
        shownavindex: 0,
        is_open     : "no_one",
        is_show     :  "activity"
      });
    }else{
      this.setData({
        shownavindex: 3,
        is_open     : "activity",
        is_show    :  "activity"
      });
    }
  }

})
