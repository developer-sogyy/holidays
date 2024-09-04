const weekPodzEl = document.getElementById("weekPodz");
const dayPodzEl = document.getElementById("dayPodz");
const hourPodzEl = document.getElementById("hourPodz");
const minutePodzEl = document.getElementById("minutePodz");
const secondPodzEl = document.getElementById("secondPodz");
const milisecondPodzEl = document.getElementById("milisecondPodz");


const weekVanEl = document.getElementById("weekVan");
const dayVanEl = document.getElementById("dayVan");
const hourVanEl = document.getElementById("hourVan");
const minuteVanEl = document.getElementById("minuteVan");
const secondVanEl = document.getElementById("secondVan");
const milisecondVanEl = document.getElementById("milisecondVan");


const weekPolEl = document.getElementById("weekPol");
const dayPolEl = document.getElementById("dayPol");
const hourPolEl = document.getElementById("hourPol");
const minutePolEl = document.getElementById("minutePol");
const secondPolEl = document.getElementById("secondPol");
const milisecondPolEl = document.getElementById("milisecondPol");

const Podz = new Date("October 29, 2024 00:00:00").getTime();
const Van = new Date("December 23, 2024 00:00:00").getTime();
const Pol = new Date("February 3, 2025 00:00:00").getTime();

let currentindex = 1;

updateCountdownPodz();
milPodz();
updateCountdownVan();
milVan();
updateCountdownPol();
milPol();
changeBg();


function updateCountdownPodz() {
  const now = new Date().getTime();
  const gap = Podz - now;

  //const milisecond = 1;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const w = Math.floor(gap / week);
  const d = Math.floor((gap % week) / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  weekPodzEl.innerText = w;
  dayPodzEl.innerText = d;
  hourPodzEl.innerText = h;
  minutePodzEl.innerText = m;
  secondPodzEl.innerText = s;
  setTimeout(updateCountdownPodz, 1000);
}

function milPodz() {
  const now = new Date().getTime();
  const gap = Podz - now;

  const milisecond = 1;
  const second = 1000;
  const ms = Math.floor((gap % second) / milisecond);

  milisecondPodzEl.innerText = ms;
  setTimeout(milPodz, 1);
}


function updateCountdownVan() {
  const now = new Date().getTime();
  const gap = Van - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const w = Math.floor(gap / week);
  const d = Math.floor((gap % week) / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  weekVanEl.innerText = w;
  dayVanEl.innerText = d;
  hourVanEl.innerText = h;
  minuteVanEl.innerText = m;
  secondVanEl.innerText = s;
  setTimeout(updateCountdownVan, 1000);
}

function milVan() {
  const now = new Date().getTime();
  const gap = Van - now;

  const milisecond = 1;
  const second = 1000;
  const ms = Math.floor((gap % second) / milisecond);

  milisecondVanEl.innerText = ms;
  setTimeout(milVan, 1);
}


function updateCountdownPol() {
  const now = new Date().getTime();
  const gap = Pol - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const w = Math.floor(gap / week);
  const d = Math.floor((gap % week) / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  weekPolEl.innerText = w;
  dayPolEl.innerText = d;
  hourPolEl.innerText = h;
  minutePolEl.innerText = m;
  secondPolEl.innerText = s;
  setTimeout(updateCountdownPol, 1000);
}

function milPol() {
  const now = new Date().getTime();
  const gap = Pol - now;

  const milisecond = 1;
  const second = 1000;
  const ms = Math.floor((gap % second) / milisecond);

  milisecondPolEl.innerText = ms;
  setTimeout(milPol, 1);
}

function changeBg() {
    if (currentindex == 0) { 
        document.body.style.backgroundColor = "#6a5acd";
        currentindex = 1;
    } else if (currentindex == 1) { 
        document.body.style.backgroundColor = "#f08080";
        currentindex = 0;
    }
    

    setTimeout(changeBg, 30000);
}
