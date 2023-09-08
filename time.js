function startTime() {
  const today = new Date();
  let x = today.getTime();
  document.getElementById('currentUTCTime').innerHTML =`Friday  ${x}`;
  setTimeout(startTime, 1000);
}

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
