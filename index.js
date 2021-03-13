let checkBurger = document.querySelector("#checkBurger");
checkBurger.addEventListener("change", function() {
    let options = document.getElementById("options");
    this.checked ? options.className = "optDisplay" : options.className = "optHide";
});