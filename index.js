function clock() {
  let hours = document.getElementById("h");
  let minutes = document.getElementById("m");
  let seconds = document.getElementById("s");
  let period = document.getElementById("p");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  setInterval(clock, 1000);
}

clock();
