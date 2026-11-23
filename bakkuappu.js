
const display = document.getElementById("timerHyouji");
const click = document.getElementById("start");
const souShuchu = document.getElementById("souShuchu")
const STOPtoLIS = document.getElementById("STOPtoLIS")
let saigonokeisannnitukauyo = 0
let saigonitukauyo=0
let teisi = false
let clicknocount =0
function clicknocountup(){clicknocount +=1}
function teisiHantei (){
  if(teisi === false){
    teisi=true
    console.log("trueになった")
    STOPtoLIS.textContent = "再開する";
    STOPtoLIS.style.backgroundColor = "#2ecc71";
  }else if(teisi === true){
    teisi = false
    console.log("falseになった")
    STOPtoLIS.textContent = "一時停止";
    STOPtoLIS.style.backgroundColor = "#3498db"
  }
}
let shuryokurikkunotukauyatu =0
function syuryouCric(){
  shuryokurikkunotukauyatu+=1;
  if(shuryokurikkunotukauyatu===2){
console.log("owatta");
STOPtoLIS.style.display = "none" ;
click.style.display = "none" ;
 display.textContent=`おつ～${saigonokeisannnitukauyo*25+saigonitukauyo}分勉強したで！！すっげ！！`
  }
}

//非同期処理の処理内容で待たせる処理、msの時間たったらresol1veで何も起こらないイベントを起こすことで、何秒間待たせることをが可能

function wait(ms) {

  return new Promise((resolve) => setTimeout(resolve, ms));


}
//asyncは以下の関数には非同期処理があるよって言っている
//一次停止時の待つためのもの
  /**集中タイム、非集中タイム、大休憩それぞれで
1分経ったら数字を減らすをやっていく、それを、
await waitSeconds(60) 1秒ずつ数えて60秒立ったら次の
繰り返し処理に渡す、そしてその1分を計測するときに
まずteisiがtrueつまり一時停止ボタンが押され
たかをチェックしてから一秒待つをしている*/
async function waitSeconds(seconds) {//whileでチェックしてawait wait(1000)で一秒まつをseconds回くりかえす
  for (let s = 0; s < seconds; s++) {  
  if (shuryokurikkunotukauyatu === 2) return;
    while (teisi === true) {
      if (shuryokurikkunotukauyatu === 2) return;
      await wait(100);
    }
    await wait(1000);
  }
}

async function startPomodoro() {
  let shuchuCount = 0;
  let InaShuchuCount = 0;

  while (true) {
    console.log("25分スタート！");
    for (let i = 25; i > 0; i--) { 
      display.textContent = `残りの集中タイムは ${i} 分です`;
      await waitSeconds(60);//
      if (shuryokurikkunotukauyatu === 2) return;
      saigonitukauyo += 1;
    }
    shuchuCount += 1;

  
    if (shuchuCount === 4 && InaShuchuCount === 3) {
      console.log("15分の大休憩ですよ！");
        saigonokeisannnitukauyo +=1
            saigonitukauyo =0
      for (let i = 15; i > 0; i--) {
  display.textContent = `残りの非集中タイムは ${i} 分です`;

await waitSeconds(60);
      if (shuryokurikkunotukauyatu === 2) return;
  
      }
      // 次のセットのためにカウントをリセット
      shuchuCount = 0;
      InaShuchuCount = 0;
    } else {
      console.log("5分の小休憩ですよ！");
        saigonokeisannnitukauyo +=1
      for (let i = 5; i > 0; i--) {
  display.textContent = `残りの非集中タイムは ${i} 分です`;
saigonitukauyo =0

await waitSeconds(60);
      if (shuryokurikkunotukauyatu === 2) return;
      }
      InaShuchuCount += 1;
    }
  }
}
STOPtoLIS.addEventListener("click",
  () => { teisiHantei()})

click.addEventListener("click", () => {
  clicknocountup()
  if(clicknocount === 1) {
  startPomodoro();}
   click.textContent="終了";
   STOPtoLIS.style.display = "inline-block" ;
   syuryouCric()
  
  });

