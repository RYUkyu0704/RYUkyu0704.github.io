let game = {
  startTime: null,
  stopTime: null,
  seconds: null,
  displayArea: document.getElementById('display-area'),
  start: function () {
    game.displayArea.innerText = '計測中';
    game.startTime = Date.now();
  },
  stop: function () {
    game.stopTime = Date.now();
    game.seconds = (game.stopTime - game.startTime) / 1000;

    if (9.5 <= game.seconds && game.seconds <= 10.5) {
      game.displayArea.innerText = game.seconds + '秒でした。すごい！';
    } else {
      game.displayArea.innerText = game.seconds + '秒でした。残念。';
    }
  },
};




if (confirm('OKを押して、ちょうど10秒経ったと思ったら何かキーを押してください')) {
  game.start();
  let option = {
    once: true
  }
  document.body.addEventListener(
    'keydown',
    game.stop,
    option
  );
}

