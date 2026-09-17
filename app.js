// DRY - Don't repeat yourself

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60)
  let timerSeconds = seconds % 60

  if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes
  }

  return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(230));
