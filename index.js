const modal = document.querySelector(".modal");
const iconsMail = document.getElementsByClassName("iconSendMail");

const cardsList = [
    {
        firstName: "Antoine",
        lastName: "Cau",
        img: "./pictures/antoine.jpg",
        techs: ["html", "css", "github"],
        gitHub: "https://github.com/AntoineCAU",
        linkedin: "https://www.linkedin.com/in/antoine-cau-dw/"
    },
    {
        firstName: "Caroline",
        lastName: "Dorchies",
        img: "./pictures/caro.jpg",
        techs: ["html", "css", "js"],
        gitHub: "https://github.com/AntoineCAU",
        linkedin: "https://www.linkedin.com/in/antoine-cau-dw/"
    },
    {
        firstName: "Christophe",
        lastName: "Luc",
        img: "./pictures/christophe.jpg",
        techs: ["github"],
        gitHub: "https://github.com/AntoineCAU",
        linkedin: "https://www.linkedin.com/in/antoine-cau-dw/"
    },
    {
        firstName: "Kévin",
        lastName: "Bodart",
        img: "./pictures/kevin.jpg",
        techs: ["html", "css", "github"],
        gitHub: "https://github.com/AntoineCAU",
        linkedin: "https://www.linkedin.com/in/antoine-cau-dw/"
    },
    {
        firstName: "Mickael",
        lastName: "Dessin",
        img: "./pictures/mika.jpg",
        techs: ["html", "css", "github"],
        gitHub: "https://github.com/AntoineCAU",
        linkedin: "https://www.linkedin.com/in/antoine-cau-dw/"
    }
];

// close modal if click ext
modal.addEventListener("click", () => {
    modal.style.display = "none";
});

// open modal when click send mail icon
for (let iconMail of iconsMail) {
    iconMail.addEventListener("click", () => {
        modal.style.display = "flex";
    });
};