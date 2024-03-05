const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

setInterval(() => {
  const tarih = new Date();
  let h = tarih.getHours();
  let m = tarih.getMinutes();
  let s = tarih.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  hour.textContent = h;
  minute.textContent = m;
  seconds.textContent = s;
}, 1000);
