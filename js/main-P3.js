let appear = () => {
    let stop = setInterval(() => {
        let figure1 = document.querySelector("figure:first-of-type");

        figure1.style.display = "block";

        if (document.querySelector("figure:first-of-type").length === 2) {
            clearInterval(stop);
        }
    }, 1000);
};

window.addEventListener("load", appear);

let appear2 = () => {
    let stop2 = setInterval(() => {
        let figure2 = document.querySelector("figure:nth-of-type(2)");

        figure2.style.display = "block";

        if (document.querySelector("figure:nth-of-type(2)").length === 2) {
            clearInterval(stop2);
        }
    }, 2000);
};

window.addEventListener("load", appear2);

let appear3 = () => {
    let stop3 = setInterval(() => {
        let figure3 = document.querySelector("figure:last-of-type");

        figure3.style.display = "block";

        if (document.querySelector("figure:last-of-type").length === 2) {
            clearInterval(stop3);
        }
    }, 3000);
};

window.addEventListener("load", appear3);

// figure.style.display = "block";
// let appear2 = () => {
//     let stop2 = setInterval(() => {
//         document.getElementById("ffigure2");
//         // Placer une condition pour arrêter un interval avec clear interval(créer en amont une variable)

//         document.querySelector("ffigure2").style.display = "inline-block";

//         clearInterval(stop2);
//     }, 4000);
// };
// let appear3 = () => {
//     let stop3 = setInterval(() => {
//         document.getElementById("ffigure3");
//         // Placer une condition pour arrêter un interval avec clear interval(créer en amont une variable)

//         document.querySelector("ffigure3").style.display = "inline-block";

//         clearInterval(stop3);
//     }, 6000);
// };
