let tn = document.getElementById('btn');
let value = document.getElementById('value');
let notice = document.getElementById('notice');
let linkto = document.getElementById('linkto');

//1-----------
tn.addEventListener('click', function(e) {  
  e.stopPropagation();
  chrome.storage.sync.get('txt',function(budget){
    let aa = 1;
    if(budget.txt){
      chrome.storage.sync.set({'txt':budget.txt+aa}); 
      value.innerHTML=budget.txt+aa;  
    }else{
      chrome.storage.sync.set({'txt':aa});
      value.innerHTML=aa;  
    }
  })
})
//2----------->options.js
notice.addEventListener('click', function(e) {  
  let notifyOptions = {
    //type:basic,img,simble,list
    type: 'basic',
    title: '消息啦啦啦啦啦啦啦',
    iconUrl: 'img/logo.png',
    message:"message......"
  }
  chrome.notifications.create('limitNotifydd',notifyOptions);
})
//5--------------->event
chrome.storage.onChanged.addListener(function(changes,storageName){
  //changes.txt.newValue:txt变化后的值
  chrome.browserAction.setBadgeText({"text":changes.txt.newValue.toString()})//只显示四个字符
  chrome.browserAction.setBadgeBackgroundColor({"color":[0,255,23,0.6]})
})

linkto.addEventListener('click', function(e) {  
  console.log(222);
  e.stopPropagation();
  let newUrl = "https://www.baidu.com/";
  chrome.tabs.create({url:newUrl});
  // window.location.href="https://www.baidu.com/";
  // window.open("https://www.baidu.com/");
})