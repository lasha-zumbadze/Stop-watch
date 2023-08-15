const dozenSeconds = document.querySelector('.dozen-seconds');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');
const doubleMilliseconds = document.querySelector('.double-milliseconds');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let time = 1;
let millisecond = 0;
let second = 0;
let dozenSecond = 0;
let counting;

const stopTimer = function (timer) {
  clearInterval(timer);

  startBtn.classList.remove('active');
  resetBtn.classList.remove('active');
  stopBtn.classList.add('active');
  counting = false;
};

const resetTimer = function (timer) {
  clearInterval(timer);

  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  resetBtn.classList.add('active');

  time = 1;
  millisecond = 0;
  second = 0;
  dozenSecond = 0;
  counting;

  dozenSeconds.textContent = '0';
  seconds.textContent = '0';
  milliseconds.textContent = '0';
  doubleMilliseconds.textContent = '0';

  counting = false;
};

startBtn.addEventListener('click', function () {
  stopBtn.classList.remove('active');
  resetBtn.classList.remove('active');
  startBtn.classList.add('active');
  if (!counting) {
    doubleMilliseconds.textContent = time;
    const timer = setInterval(() => {
      time++;
      if (time > 9) time = 0;
      doubleMilliseconds.textContent = time;

      if (time === 0) {
        millisecond++;
        if (millisecond > 9) millisecond = 0;
        milliseconds.textContent = millisecond;

        if (millisecond === 0) {
          second++;
          if (second > 9) second = 0;
          seconds.textContent = second;

          if (second === 0) {
            dozenSecond++;
            dozenSeconds.textContent = dozenSecond;
          }
        }
      }

      stopBtn.addEventListener('click', stopTimer.bind(null, timer));

      resetBtn.addEventListener('click', resetTimer.bind(null, timer));

      counting = true;
    }, 10);
  }
});
