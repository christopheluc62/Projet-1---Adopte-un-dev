const modal = document.querySelector(".modal");
const iconsMail = document.getElementsByClassName("iconSendMail");

const profilsList = [
    {
        firstName: "Loïc",
        lastName: "Brassart",
        img: "./pictures/loic.JPG",
        techs: ["html", "css", "js", "Node", "React", "PHP", "Python"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Loredan",
        lastName: "David",
        img: "",
        techs: ["html", "css", "js"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Paris"
    },
    {
        firstName: "Pierre",
        lastName: "Tabary",
        img: "./pictures/pierre.jpg",
        techs: ["html", "css", "github", "js"],
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
        techs: ["html", "css", "js"],
        gitHub: "https://github.com/frvanco",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Marseille"
    },
    {
        firstName: "Hacene",
        lastName: "Hamroune",
        img: "./pictures/hacene.jpg",
        techs: ["css", "js", "github"],
        gitHub: "https://github.com/Hacene010",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Teddy",
        lastName: "Hochart",
        img: "./pictures/teddy.jpeg",
        techs: ["css", "js", "github"],
        gitHub: "https://github.com/Hochart-dev",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Kévin",
        lastName: "Bodart",
        img: "./pictures/kevin.jpg",
        techs: ["html"],
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
        techs: ["css", "js", "github"],
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
        techs: ["github"],
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
        techs: ["github", "html", "python"],
        gitHub: "https://github.com/GeorgesFORTRY",
        linkedin: "https://www.linkedin.com/in/georges-fortry/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Thomas",
        lastName: "Supervil",
        img: "",
        techs: ["github", "html", "python", "js", "css"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Gaspard",
        lastName: "Dechirot",
        img: "",
        techs: ["github", "html", "css"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Strasbourg"
    },
    {
        firstName: "Caroline",
        lastName: "Dorchies",
        img: "./pictures/caro.jpg",
        techs: ["html", "css", "js"],
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
        techs: ["html", "css", "github", "c++"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Robin",
        lastName: "Delannoy",
        img: "",
        techs: ["css", "github", "c"],
        gitHub: "https://github.com/Zamomako",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Marseille"
    },
    {
        firstName: "Victor",
        lastName: "Maenhout",
        img: "",
        techs: ["css", "github", "java"],
        gitHub: "https://github.com/Maenhout",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Antoine",
        lastName: "Cau",
        img: "./pictures/antoine.jpg",
        techs: ["html", "css", "github"],
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
        techs: ["html", "css", "github", "js"],
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
        techs: ["html", "js"],
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
        techs: ["html", "css", "js"],
        gitHub: "https://github.com/Sofiaboud",
        linkedin: "https://www.linkedin.com/in/sofia-boudaoud-051757204/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
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

// change text card hover
const card = document.querySelector('.card');
const cardTechs = document.querySelector('.cardTechs');
const cardDescr = document.querySelector('.cardDescr');

card.addEventListener('mouseenter', () => {
    cardTechs.style.display = 'none';
    cardDescr.style.display = 'block';
});

card.addEventListener('mouseleave', () => {
    cardTechs.style.display = 'block';
    cardDescr.style.display = 'none';
});