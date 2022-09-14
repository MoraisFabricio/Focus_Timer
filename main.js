// VARIABLES //
var timer_min = 25;
var timer_sec = 00;
var timer;

var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var button_play = document.querySelector("#play");
var button_stop = document.querySelector("#stop");
var button_add = document.querySelector("#add");
var button_sub = document.querySelector("#sub");
var alarm = document.querySelector("#alarm");
var button_tree = document.querySelector("#tree");
var button_rain = document.querySelector("#rain");
var button_house = document.querySelector("#house");
var button_fire = document.querySelector("#fire");
var icon = document.querySelector("#icon");
var playicon = document.querySelector("#playicon");
var stopicon = document.querySelector("#stopicon");
var addicon = document.querySelector("#addicon");
var subicon = document.querySelector("#subicon");
var treeicon = document.querySelector("#treeicon");
var slider = document.querySelector("#slider");

var volumeTree = document.querySelector("#volume-tree");
var volumeRain = document.querySelector("#volume-rain");
var volumeHouse = document.querySelector("#volume-house");
var volumeFire = document.querySelector("#volume-fire");
var audioTree = document.querySelector("#tree_sound");
var audioRain = document.querySelector("#rain_sound");
var audioHouse = document.querySelector("#house_sound");
var audioFire = document.querySelector("#fire_sound");


// END VARIABLES //

// FUNCTIONS FOR THE CHRONOMETER //
button_play.onclick = function () {
  timer = setInterval(() => counter(), 1000);
};

button_stop.onclick = function () {
  clearInterval(timer);
  timer_min = 25;
  timer_sec = 0;
  updateClock(timer_min, timer_sec);
};

button_add.onclick = function () {
  timer_min = timer_min + 5;
  updateClock(timer_min, timer_sec);
};

button_sub.onclick = function () {  
  timer_min = timer_min - 5;
  if (timer_min < 0) {
    timer_min = 0;
    timer_sec = 0;
  }
  updateClock(timer_min, timer_sec);
};
// END FUNCTIONS FOR THE CHRONOMETER //

// ADD ZERO AND PLAY ALARM //
function counter() {
  if (timer_sec == 0 && timer_min > 0) {
    timer_sec = 59;
    timer_min = timer_min - 1;
  } else if (timer_sec != 0) {
    timer_sec = +timer_sec - 1;
  } else {
    clearInterval(timer);
    alarm.play();
  }
  updateClock(timer_min, timer_sec);
}

function updateClock(min, sec) {
  minutes.innerHTML = min < 10 ? "0" + min : min;
  seconds.innerHTML = sec < 10 ? "0" + sec : sec;
}
// END ADD ZERO AND PLAY ALARM //

// TAGS WITH SOUND AND CHANGE THEME//
button_tree.onclick = function () {
  tree_sound.play();
  button_tree.classList.toggle("tag-theme");
  if (button_tree.classList.contains("tag-theme")) {
    treeicon.src = "img/treew.png";
  } else {
    treeicon.src = "img/tree.png";
  }
};
button_rain.onclick = function () {
  rain_sound.play();
  button_rain.classList.toggle("tag-theme");
  if (button_rain.classList.contains("tag-theme")) {
    rainicon.src = "img/rainw.png";
  } else {
    rainicon.src = "img/rain.png";
  }
};
button_house.onclick = function () {
  house_sound.play();
  button_house.classList.toggle("tag-theme");
  if (button_house.classList.contains("tag-theme")) {
    houseicon.src = "img/housew.png";
  } else {
    houseicon.src = "img/house.png";
  }
};
button_fire.onclick = function () {
  fire_sound.play();
  button_fire.classList.toggle("tag-theme");
  if (button_fire.classList.contains("tag-theme")) {
    fireicon.src = "img/firew.png";
  } else {
    fireicon.src = "img/fire.png";
  }
};
// END TAGS WITH SOUND AND CHANGE THEME//

// VOLUME CONTROL //

  volumeTree.addEventListener("input", function(e) {
    audioTree.volume = e.currentTarget.value / 100;
});
  volumeRain.addEventListener("input", function(e) {
    audioRain.volume = e.currentTarget.value / 100;
});
  volumeHouse.addEventListener("input", function(e) {
    audioHouse.volume = e.currentTarget.value / 100;
  });
  volumeFire.addEventListener("input", function(e) {
    audioFire.volume = e.currentTarget.value / 100;
});

//volume.change = function() {
//tree_sound.volume = slider;
//}

// END VOLUME CONTROL //

// CHANGE THEME //
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/moon.png";
    playicon.src = "img/playw.png";
    stopicon.src = "img/stopw.png";
    addicon.src = "img/addw.png";
    subicon.src = "img/subw.png";
  } else {
    icon.src = "img/sun.png";
    playicon.src = "img/play.png";
    stopicon.src = "img/stop.png";
    addicon.src = "img/add.png";
    subicon.src = "img/sub.png";
  }
};
// END CHANGE THEME //
