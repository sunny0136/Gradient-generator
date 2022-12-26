var css = document.querySelector(".color-codes");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient_col = document.querySelector(".show-gradient")
var linearDirection = document.getElementsByName("toDirection")[0];
var changeRadial = document.getElementsByName("toChange")[0];
gradient_col.style.background = "linear-gradient(to right, rgb(128, 0, 128), rgb(128, 128, 255))";
function currentSettings() {
    var getGradient = window.getComputedStyle(gradient_col, null).getPropertyValue("background-image");
   // console.log(currentSettings);
   css.textContent = getGradient;
}
currentSettings()

function returncolor(select){
    if(document.getElementById('selection').value === "radial"){
        gradient_col.style.background = "radial-gradient( circle " + ", " + color1.value + " , " + color2.value +")";
    }else{
    gradient_col.style.background = "linear-gradient(" + linearDirection.value + ", " + color1.value + " , " + color2.value +")";
    }
    currentSettings();
}
document.querySelector('select[name = "toDirection"]').onchange = returncolor;
document.querySelector('select[name = "toChange"]').onchange = returncolor;
color1.addEventListener("input", returncolor);
color2.addEventListener("input", returncolor);