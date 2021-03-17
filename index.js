const modal = document.querySelector(".modal");
const sendMail = document.querySelector(".iconSendMail");

// close modal if click ext
modal.addEventListener("click", () => {
    modal.style.display = "none";
});

// open modal when click send mail icon
sendMail.addEventListener("click", () => {
    modal.style.display = "flex";
});