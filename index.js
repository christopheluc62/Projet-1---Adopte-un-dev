let checkBurger = document.querySelector("#checkBurger");
checkBurger.addEventListener("change", function() {
    let options = document.getElementById("options");
    this.checked ? options.className = "optDisplay" : options.className = "optHide";
});

let checkCaddy = document.querySelector("#checkCaddy");
checkCaddy.addEventListener("change", function() {
    let options = document.getElementById("added");
    this.checked ? options.className = "addDisplay" : options.className = "addHide";
});