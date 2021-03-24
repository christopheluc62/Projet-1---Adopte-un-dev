const modal = document.querySelector(".modal");
const iconsMail = document.getElementsByClassName("iconSendMail");


const profilsList = [
    {
        firstName: "Loïc",
        lastName: "Brassart",
        img: "./pictures/loic.JPG",
        techs: ["HTML", "CSS", "JS", "Node", "React", "PHP", "Python"],
        gitHub: "",
        linkedin: "https://www.linkedin.com/in/loic-brassart-a106a555/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Loredan",
        lastName: "David",
        img: "./pictures/loredan.jpeg",
        techs: ["HTML", "CSS", "JS"],
        gitHub: "",
        linkedin: "https://www.linkedin.com/in/loredan-david/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Paris"
    },
    {
        firstName: "Pierre",
        lastName: "Tabary",
        img: "./pictures/pierre.jpg",
        techs: ["HTML", "CSS", "Github", "JS"],
        gitHub: "https://github.com/Erriep",
        linkedin: "https://www.linkedin.com/in/pierre-tabary/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Antoine",
        lastName: "Vancompernolle",
        img: "",
        techs: ["HTML", "CSS", "JS"],
        gitHub: "https://github.com/frvanco",
        linkedin: "https://www.linkedin.com/in/unavailable/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Marseille"
    },
    {
        firstName: "Hacene",
        lastName: "Hamroune",
        img: "./pictures/hacene.jpg",
        techs: ["CSS", "JS", "Github"],
        gitHub: "https://github.com/Hacene010",
        linkedin: "https://www.linkedin.com/in/hacenehamroune/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Teddy",
        lastName: "Hochart",
        img: "./pictures/teddy.jpeg",
        techs: ["CSS", "JS", "Github"],
        gitHub: "https://github.com/Hochart-dev",
        linkedin: "https://www.linkedin.com/in/unavailable/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Kévin",
        lastName: "Bodart",
        img: "./pictures/kevin.jpg",
        techs: ["HTML"],
        gitHub: "https://github.com/bdtkevin",
        linkedin: "https://www.linkedin.com/in/kevin-bodart/",
        email: "bdtkevin@gmail.com",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Reims"
    },
    {
        firstName: "Thai Bang",
        lastName: "Hoang",
        img: "./pictures/bang.jpg",
        techs: ["CSS", "JS", "Github"],
        gitHub: "https://github.com/ThaiBangHOANG",
        linkedin: "https://www.linkedin.com/in/thaibanghoang/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Paris"
    },
    {
        firstName: "Christophe",
        lastName: "Luc",
        img: "./pictures/christophe.jpg",
        techs: ["Github"],
        gitHub: "https://github.com/christopheluc62",
        linkedin: "https://www.linkedin.com/in/christophe-luc62/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Georges",
        lastName: "Fortry",
        img: "./pictures/georges.jpeg",
        techs: ["Github", "HTML", "Python"],
        gitHub: "https://github.com/GeorgesFORTRY",
        linkedin: "https://www.linkedin.com/in/georges-fortry/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Thomas",
        lastName: "Supervil",
        img: "./pictures/thomas.jpeg",
        techs: ["Github", "HTML", "Python", "JS", "CSS"],
        gitHub: "",
        linkedin: "https://www.linkedin.com/in/thomas-supervil/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Gaspard",
        lastName: "Dechirot",
        img: "./pictures/gaspard.jpeg",
        techs: ["Github", "HTML", "CSS"],
        gitHub: "",
        linkedin: "https://www.linkedin.com/in/gaspardlkd/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Strasbourg"
    },
    {
        firstName: "Caroline",
        lastName: "Dorchies",
        img: "./pictures/caro.jpg",
        techs: ["HTML", "CSS", "JS"],
        gitHub: "https://github.com/CaroD59",
        linkedin: "https://www.linkedin.com/in/caroline-dorchies-80953a205/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Mickael",
        lastName: "Dessin",
        img: "./pictures/mika.jpg",
        techs: ["HTML", "CSS", "Github", "C++"],
        gitHub: "",
        linkedin: "https://www.linkedin.com/in/mickael-dessin-2392a6209/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Robin",
        lastName: "Delannoy",
        img: "",
        techs: ["CSS", "Github", "C"],
        gitHub: "https://github.com/Zamomako",
        linkedin: "https://www.linkedin.com/in/unavailable/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Marseille"
    },
    {
        firstName: "Victor",
        lastName: "Maenhout",
        img: "",
        techs: ["CSS", "Github", "Java"],
        gitHub: "https://github.com/Maenhout",
        linkedin: "https://www.linkedin.com/in/maenhout/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Antoine",
        lastName: "Cau",
        img: "./pictures/antoine.jpg",
        techs: ["HTML", "CSS", "Github"],
        gitHub: "https://github.com/AntoineCAU",
        linkedin: "https://www.linkedin.com/in/antoine-cau-dw/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Julien",
        lastName: "Delemarle",
        img: "./pictures/julien.jpg",
        techs: ["HTML", "CSS", "Github", "JS"],
        gitHub: "",
        linkedin: "https://www.linkedin.com/in/julien-delemarle-3a4998b9/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Luay",
        lastName: "Boungab",
        img: "",
        techs: ["HTML", "JS"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Sofia",
        lastName: "Boudaoud",
        img: "",
        techs: ["HTML", "CSS", "JS"],
        gitHub: "https://github.com/Sofiaboud",
        linkedin: "https://www.linkedin.com/in/sofia-boudaoud-051757204/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    }
];


function addCard(profil) {
const newCard = document.createElement("article");
newCard.classList.add ("card");

const newCardImg = document.createElement("div");
newCardImg.classList.add ("cardImg");
if (profil.img !== ""){
    newCardImg.style.backgroundImage = `url(${profil.img})`; 
    } 
else {
    newCardImg.style.backgroundImage = "url(./pictures/default.svg)";
}
newCard.appendChild(newCardImg);

const newCardName = document.createElement("p");
newCardName.classList.add ("cardName");
newCardName.innerHTML = `${profil.firstName} ${profil.lastName}`;
newCard.appendChild(newCardName);

const newCardTechs = document.createElement("p");
newCardTechs.classList.add ("cardTechs");
newCardTechs.innerHTML = profil.techs.join(", ");
newCard.appendChild(newCardTechs);

const newCardDescr = document.createElement("p");
newCardDescr.classList.add ("cardDescr");
newCardDescr.innerHTML = profil.descr;
newCard.appendChild(newCardDescr);

const newSendMessage = document.createElement("div");
newSendMessage.classList.add ("sendMsg");
newCard.appendChild(newSendMessage);

if (profil.gitHub !== ""){
const newGithubLink = document.createElement("a");
newGithubLink.href = profil.gitHub;
newGithubLink.target = "_blank";
newSendMessage.appendChild(newGithubLink);

const newGithubImg = document.createElement("img");
newGithubImg.classList.add ("iconGithub");
newGithubImg.src = "./pictures/github.svg";
newGithubImg.alt = "Github logo";
newGithubLink.appendChild(newGithubImg);
}

if (profil.linkedin !== ""){
const newLinkedInLink = document.createElement("a");
newLinkedInLink.href = profil.linkedin;
newLinkedInLink.target = "_blank";
newSendMessage.appendChild(newLinkedInLink);

const newLinkedInImg = document.createElement("img");
newLinkedInImg.classList.add ("iconLinkedin");
newLinkedInImg.src = "./pictures/linkedin.svg";
newLinkedInImg.alt = "Linkedin logo";
newLinkedInLink.appendChild(newLinkedInImg);
}

if (profil.email !== ""){
const newIconSendMail = document.createElement("img");
newIconSendMail.classList.add ("iconSendMail");
newIconSendMail.src = "./pictures/sendMail.svg";
newIconSendMail.alt = "Send a mail icon";
newSendMessage.appendChild(newIconSendMail);
}

const cardsGrid = document.querySelector(".cardsGrid");
cardsGrid.appendChild(newCard);
}

for(let i = 0 ; i < profilsList.length ; i++){
    addCard(profilsList[i]);
}

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

// open modal when click send mail icon
for (let iconMail of iconsMail) {
    iconMail.addEventListener("click", () => {
        modal.style.display = "flex";
    });
};