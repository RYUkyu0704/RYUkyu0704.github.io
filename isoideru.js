//  HTMLのidを見つけてくる
const keisanBotan = document.getElementById('keisanBotan');
const nihonJikanNyuryoku = document.getElementById('nihonJikanNyuryoku');
const rondonKekka = document.getElementById('rondonKekka');
const amerikaKekka = document.getElementById('amerikaKekka');

// 「計算する！」ボタンがクリックされた時の処理
keisanBotan.addEventListener('click', function() {
  
  //入力された時間（文字列）を取得する
  const nyuryokuJikan = nihonJikanNyuryoku.value;

  // もし何も入力されずにボタンが押されたら、警告を出してストップ
  if (nyuryokuJikan === "") {
    alert("時間を入力してください！");
    return;
  }

  /*たとえば "15:30" を :　で真っ二つに割って、「15」と「30」の配列に分ける、
  そんな都合がいいものがあったとは*/
  const waketaJikan = nyuryokuJikan.split(':');
  
  // 時間の部分を、計算できるように「数字」に変換する
  let nihonJikan = parseInt(waketaJikan[0], 10); 
  /*分の部分（30）は計算しないので、そのまま文字として置いておく、」
  アメリカ、イギリス、フランス、韓国などなどほぼほぼの国は時でじさが
  でるみたい,ちなみに後ろの１０は十進数ってことでバグを減らせるみたい*/
  const fun = waketaJikan[1];           

  //  ロンドンの時間を計算する日本から マイナス8時間
  let rondonJikan = nihonJikan - 8
  // もしマイナスになったら、24を足して前日の時間に戻す！
  if (rondonJikan < 0) {
    rondonJikan = rondonJikan + 24; 
  }

  // アメリカ（ニューヨーク）の時間を計算するにほんかマイナス１３時間
  let amerikaJikan = nihonJikan - 13
  if (amerikaJikan < 0) {
    amerikaJikan = amerikaJikan + 24;
  }

  /*計算した結果をHTMLに書き込む、textContentは数字を文字列にする、そう
  することで：をいれられる*/
  rondonKekka.textContent = rondonJikan + ":" + fun;
  amerikaKekka.textContent = amerikaJikan + ":" + fun;
  
});