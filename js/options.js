//options_page参数
//3------------->event.js
let tn = document.getElementById('btn');
let value = document.getElementById('value');
 
tn.addEventListener('click', function(e) {  
  close();
  e.stopPropagation();
})