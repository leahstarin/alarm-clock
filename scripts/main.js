
(function(){
  'use strict';
// console.log(Date());

setInterval(function(){
  // console.log(Date());
  var clock = document.getElementById('clock');
  var timerBar = document.getElementById('timerBar');
  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  // console.log(seconds);

  if (hour < 10){
    hour = "0" + hour;
  }

  if (minutes < 10){
    minutes = "0" + minutes;
  }

  if (seconds < 10){
    seconds = "0" + seconds;
  }


  // clock.textContent = Date();
  clock.textContent = hour + ":" + minutes + ":" + seconds;
  var percentage = seconds/60;
  // console.log(percentage);

  timerBar.style.width = 500*percentage + 'px';

 var h = hour.toString(16);
 var m = minutes.toString(16);
 var s = seconds.toString(16);

 // console.log(h+m+s);

 document.body.style.backgroundColor = '#f'+ s;






},1000)

})();
