<<<<<<< HEAD
document.body.style.border = "5px solid red"
document.cookie = "H_PS_PSSID="
//4------------------
let contextMenu = {
  id: "show",
  title: "哦哦哦",
  //contexts:page,video.....
  contexts:["selection"],
}
chrome.contextMenus.create(contextMenu);
chrome.contextMenus.onClicked.addListener(function(clickData){
  //clickData.menuItemId:被点击的菜单选项卡的id
  //clickData.selectionText:选中的内容
  if(clickData.menuItemId == "show" && clickData.selectionText){
    let notifyOptions = {
      //type:basic, image, list, progress.
      type: 'basic',
      title: '选项卡',
      iconUrl: 'img/logo.png',
      message:"message......"
    }
    chrome.notifications.create('limitNotify',notifyOptions);
  }
});
=======
// document.body.style.border = "5px solid red"
// //4------------------
// let contextMenu = {
//   id: "show",
//   title: "哦哦哦",
//   //contexts:page,video.....
//   contexts:["selection"],
// }
// chrome.contextMenus.create(contextMenu);
// chrome.contextMenus.onClicked.addListener(function(clickData){
//   //clickData.menuItemId:被点击的菜单选项卡的id
//   //clickData.selectionText:选中的内容
//   if(clickData.menuItemId == "show" && clickData.selectionText){
//     let notifyOptions = {
//       //type:basic, image, list, progress.
//       type: 'basic',
//       title: '选项卡',
//       iconUrl: 'img/logo.png',
//       message:"message......"
//     }
//     chrome.notifications.create('limitNotify',notifyOptions);
//   }
// });
>>>>>>> 556396ae1c19ab96fc840094304ed2ff045b12b2
//4++++-----------
// let Menu = {
//   id: "translate",
//   title: "翻译",
//   //contexts:page,video.....
//   contexts:["selection"],
// }
// chrome.contextMenus.create(Menu);
// chrome.contextMenus.onClicked.addListener(function(clickData){
//   //clickData.menuItemId:被点击的菜单选项卡的id
//   //clickData.selectionText:选中的内容
//   if(clickData.menuItemId == "translate" && clickData.selectionText){
//     let createData={
//       url:"https://fanyi.baidu.com/#zh/en/"+clickData.selectionText,
//       type: "popup",
//       top: 5,
//       left: 5,
//       // width:screen.availWidth/2,
//       // height:screen.availHeight/2,
//       width: 200,
//       height: 200,
//     }
//     chrome.windows.create(createData);
//   }
// });
//4++++++___________________
// let Menusss = {
//   id: "tts",
//   title: "朗读",
//   //contexts:page,video.....
//   contexts:["selection"],
// }
// chrome.contextMenus.create(Menusss);
// chrome.contextMenus.onClicked.addListener(function(clickData){
//   //clickData.menuItemId:被点击的菜单选项卡的id
//   //clickData.selectionText:选中的内容
//   console.log("clickData",clickData);
//   if(clickData.menuItemId == "tts" && clickData.selectionText){
//     console.log("clickData.selectionText",clickData.selectionText);
//     alert('错误：' + chrome);
//     chrome.tts.speak(clickData.selectionText,{"rate":0.7})
//   }
// });
//4++++++___________________
// let Menusss = {
//   id: "increase",
//   title: "增大字体",
//   //contexts:page,video.....
//   contexts:["all"],
// }
// chrome.contextMenus.create(Menusss);
// chrome.contextMenus.onClicked.addListener(function(clickData){
//   //clickData.menuItemId:被点击的菜单选项卡的id
//   //clickData.selectionText:选中的内容
//  chrome.tabs.executeScript(null,{
//    code:"var old = window.getComputedStyle(document.body).fontSize;\
//    var index = old.indexOf('p');\
//    var size = parseInt(old.substring(0,index));\
//    var newSize = size+20+'px'\
//    document.body.style.fontSize = newSize"}
//  )
// });
//4++++++___________________>popup.js
let Menusss = {
  id: "increase",
  title: "设置背景图",
  //contexts:page,video.....
  contexts:["all"],
}
chrome.contextMenus.create(Menusss);
chrome.contextMenus.onClicked.addListener(function(clickData){
  //clickData.menuItemId:被点击的菜单选项卡的id
  //clickData.selectionText:选中的内容
 //var imgurl = chrome.extension.getURL("img/logo.png");
// alert("imgurl",imgurl);
//  chrome.tabs.executeScript(null,{code:"document.body.style.backgroundImage='url(\""+imgurl+"\")'"})
chrome.tabs.executeScript(null,{code:"document.body.style.background=red"})
 //insertCSS
});
//6---------
// chrome.tabs.query({currentWindow:true,url:"https://www.baidu.com/"},function(tabs){
//   chrome.pageAction.show(tabs[0].id);
// })
//7------------>json
// chrome.runtime.sendMessage({todo:"showPageAction"});
// chrome.runtime.onMessage.addListener(function(request, sender, response){
//   if(request.todo == "showPageAction"){
//     chrome.tabs.query({active:true,currentWindow:true},function(tabs){
//       chrome.pageAction.show(tabs[0].id);
//     })
//   }
// });


