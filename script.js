var feet = document.querySelector(".feet");
var submit = document.querySelector(".submit");
var meter = document.querySelector(".meterValue");
var inch = document.querySelector(".inchValue");
var pixel = document.querySelector(".pixelValue");

submit.addEventListener("click", answer);

function answer(e){
    e.preventDefault()
    meter.innerHTML = 0.3048*feet.value+"m";
    inch.innerHTML = 12*feet.value+"in";
    pixel.innerHTML = 1152*feet.value+"px";
}