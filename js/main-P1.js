// let figcaption = document.getElementById("figcaption");
// let document.querySelector("figcaption").style.display = "inline-block";

// let appear = document.getElementById("present");

// appear.addEventListener("click", () => {
//     figcaption.style.display = "block";

// let func = function () {
//     appear.removeEventListener("click", func);
// };

// let h2 = document.createElement("h2");
// let p = document.createElement("p");

// h2.innerHTML = "<h2>Web developpeur</h2>";
// p.innerHTML =
//     "<p>Je m'appel Mohammed Iheb Allal, je suis développeur web et sensible à l'expérience utilisateur</p>";

// figcaption.style.display = "flex";

// h2.style.color = "white";
// document.querySelector("figcaption").appendChild(h2);
// document.querySelector("figcaption").appendChild(p);
// });

// if (!isset(p)) {
//     appear.removeEventListener("click", appear);
// } else {
//     appear.addEventListener("click", appear);
// }

let appear = document
    .getElementById("present")
    .addEventListener("click", () => {
        document.querySelector("figcaption").style.display = "block";
    });
