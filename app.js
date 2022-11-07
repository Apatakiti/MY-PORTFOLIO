function switching() {
    const page = document.getElementsByClassName("real-page");
    const pop = document.getElementsByClassName("pop-up");
    const hambur1 = document.getElementsByClassName("nav1");
    const hambur2 = document.getElementsByClassName("nav2");

    hambur1[0].addEventListener("click", () => {
        for (let i = 0; i < page.length; i += 1) {
            page[i].style.display = "none";

            for (let i = 0; i < pop.length; i += 1) {
                pop[i].style.display = "grid";
            }
        }
    });

    hambur2[0].addEventListener("click", () => {
        for (let i = 0; i < page.length; i += 1) {
            pop[i].style.display = "none";

            for (let i = 0; i < pop.length; i += 1) {
                page[i].style.display = "grid";
            }
        }
    });

    const portf = document.getElementsByClassName("port");

    portf[0].addEventListener("click", () => {
        for (let i = 0; i < pop.length; i += 1) {
            page[i].style.display = "grid";

            for (let i = 0; i < page.length; i += 1) {
                pop[i].style.display = "none";
            }
        }
    });

    const about = document.getElementsByClassName("abou");

    about[0].addEventListener("click", () => {
        for (let i = 0; i < pop.length; i += 1) {
            page[i].style.display = "grid";

            for (let i = 0; i < page.length; i += 1) {
                pop[i].style.display = "none";
            }
        }
    });

    const contac = document.getElementsByClassName("con");

    contac[0].addEventListener("click", () => {
        for (let i = 0; i < pop.length; i += 1) {
            page[i].style.display = "grid";

            for (let i = 0; i < page.length; i += 1) {
                pop[i].style.display = "none";
            }
        }
    });
}
switching();

const popUpDatas = [{
        id: 0,
        name: "Multi-Post Stories 1",
        description: "you is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
        featuredImage: "images/pop-up.png",
        skills: ["CSS", "JavaScript", "Ruby on rails"],
    },
    {
        id: 1,
        name: "Multi-Post Stories 2",
        description: "they is a the facebook webpage which took me ten years to build Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took aand i hop you enjoyed your trip down here",
        featuredImage: "images/pop-up.png",
        skills: ["Hash", "JavaScript", "Ruby on rails"],
    },
    {
        id: 2,
        name: "Multi-Post Stories 3",
        description: "pause is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
        featuredImage: "images/pop-up.png",
        skills: ["ruby", "python", "java"],
    },
    {
        id: 3,
        name: "Multi-Post Stories 4",
        description: "plus is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
        featuredImage: "images/pop-up.png",
        skills: ["react", "node.js", "mangoDB"],
    },
];

const thePop = document.getElementsByClassName("the-pop-up");
const blurs = document.getElementById("blur");

const projbtn = document.getElementsByClassName("btn");

for (let i = 0; i < projbtn.length; i += 1) {
    projbtn[i].addEventListener("click", () => {
        for (let i = 0; i < thePop.length; i += 1) {
            thePop[i].style.display = "grid";
            blurs.style.filter = "blur(500px)";

            const xmar = document.getElementById("x-mark");

            xmar.addEventListener("click", () => {
                for (let i = 0; i < thePop.length; i += 1) {
                    thePop[i].style.display = "none";
                    blurs.style.filter = "blur(0px)";
                }
            });
        }
    });
}

const fillData = ({ name, description, featuredImage, skills }) => {
    const title = document.querySelector("#poped > h2");
    const descrip = document.querySelector("#poped > p");
    const photo = document.querySelector("#poped > img");

    const skillM = document.querySelectorAll(
        "#poped > .skilling > ul > li.skill"
    );

    title.innerHTML = name;
    descrip.innerHTML = description;
    photo.src = featuredImage;

    for (let i = 0; i < skillM.length; i += 1) {
        skillM[i].innerHTML = skills[i];
    }
};

for (let i = 0; i < projbtn.length; i += 1) {
    projbtn[i].addEventListener("click", () => {
        fillData(popUpDatas[i]);
    });
}

const popUpDatasD = [{
        id: 0,
        nameD: "Multi-Post Stories Desktop 1",
        descriptionD: "you is my best projecLorem Ipsum has been the industry's standat Lorem Ipsum  dummy text of the printiis Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it  printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
        featuredImageD: "images/pop-upD.png",
        skills: ["ruby", "python", "java", "JavaScript"],
    },
    {
        id: 1,
        nameD: "Multi-Post Stories Desktop 2",
        descriptionD: "they is a the facebook webpaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy took me ten years to build Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took aand i hop you enjoyed your trip down here",
        featuredImageD: "images/pop-upD.png",
        skills: ["react", "node.js", "mangoDB", "Ruby on rails"],
    },
    {
        id: 2,
        nameD: "Multi-Post Stories Desktop 3",
        descriptionD: "pause is my best project Lorem Ipsum isLorem Ipsum is simramble. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
        featuredImageD: "images/pop-upD.png",
        skills: ["CSS", "JavaScript", "Ruby on rails", "react"],
    },
    {
        id: 3,
        nameD: "Multi-Post Stories Desktop 4",
        descriptionD: "plus is my best project Lorem Ipsum is simply dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
        featuredImageD: "images/pop-upD.png",
        skills: ["Hash", "JavaScript", "Ruby on rails", "CSS"],
    },
];

const thePopD = document.getElementsByClassName("the-pop-upD");
const xmarkD = document.getElementById("x-markD");

const projbtnD = document.getElementsByClassName("btn D");

for (let i = 0; i < projbtnD.length; i += 1) {
    projbtnD[i].addEventListener("click", () => {
        for (let i = 0; i < thePopD.length; i += 1) {
            thePopD[i].style.display = "grid";
            blurs.style.filter = "blur(200px)";

            for (let i = 0; i < thePop.length; i += 1) {
                thePop[i].style.display = "none";
            }

            xmarkD.addEventListener("click", () => {
                for (let i = 0; i < thePopD.length; i += 1) {
                    thePopD[i].style.display = "none";
                    blurs.style.filter = "blur(0px)";
                }
            });
        }
    });
}

const fillData2 = ({ nameD, descriptionD, featuredImageD, skills }) => {
    const title2 = document.querySelector("#popedD > h2");
    const descrip2 = document.querySelector("#popedD > p");
    const photo2 = document.querySelector("#popedD > img");

    const skill2 = document.querySelectorAll(
        "#popedD > .skillingD > ul > li.skill2"
    );

    title2.innerHTML = nameD;
    descrip2.innerHTML = descriptionD;
    photo2.src = featuredImageD;

    for (let i = 0; i < skill2.length; i += 1) {
        skill2[i].innerHTML = skills[i];
    }
};

for (let i = 0; i < projbtnD.length; i += 1) {
    projbtnD[i].addEventListener("click", () => {
        fillData2(popUpDatasD[i]);
    });
}

// form validation

const emails = document.forms[0].elements[1];
const subBtn = document.querySelector("button.bom");
const errMsg = document.querySelector("form > .errmsg");

subBtn.addEventListener("click", (event) => {
    const { value } = emails;
    if (value !== value.toLowerCase()) {
        event.preventDefault();

        errMsg.textContent = "kindly enter lowerCase character in the email field!";
    }
});

const emailsD = document.forms[1].elements[1];
const subBtnD = document.querySelector("button.bomD");
const errMsgD = document.querySelector("form > .errmsgD");

subBtnD.addEventListener("click", (event) => {
    const { value } = emailsD;
    if (value !== value.toLowerCase()) {
        event.preventDefault();

        errMsgD.textContent =
            "kindly enter lowerCase character in the email field!";
    }
});