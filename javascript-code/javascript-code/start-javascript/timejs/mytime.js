/*
   function show(){
   console.log(i++);
   }
 */
// 時間ごとに実行
// 前の処理を考慮しないのでブラウザがクラッシュするおそれがある
/*
   setInterval(function() {
   show();
   }, 2000);
 */
// 一度だけ実行
// 前の処理を考慮する
/*
   setTimeout(function() {
   show();
   console.log("一回だけです");
   }, 1000);
 */

var i = 0;
// Timeoutを繰り返し実行する
function show(){
  var tid = setTimeout(function() {
    document.write(i++ + "回です");
    show();
  }, 1000);
  if(i > 10){
    document.write("　終了。。");
    clearTimeout(tid);
  }
}
show();
