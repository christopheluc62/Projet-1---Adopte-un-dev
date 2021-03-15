let checkBurger = document.querySelector("#checkBurger");
checkBurger.addEventListener("change", function() {
    let menu = document.getElementById("menu");
    // this.checked ? menu.className = "menuDisplay" : menu.className = "menuHide";
    this.checked ? menu.style.height = "50vh" : menu.style.height = "0";
});