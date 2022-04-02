function progress() {
    let block = document.getElementById("block");
    let block1 = document.getElementById("block1");
    let block2 = document.getElementById("block2");
    let block3 = document.getElementById("block3");
    let block4 = document.getElementById("block4");
    let block5 = document.getElementById("block5");
    let block6 = document.getElementById("block6");
    let block7 = document.getElementById("block7");
    let block8 = document.getElementById("block8");
    let block9 = document.getElementById("block9");
    let block10 = document.getElementById("block10");

    block.style.backgroundColor = "red";
    block1.style.backgroundColor = "red";
    block2.style.backgroundColor = "red";
    block3.style.backgroundColor = "red";
    block4.style.backgroundColor = "red";
    block5.style.backgroundColor = "red";
    block6.style.backgroundColor = "red";
    block7.style.backgroundColor = "red";
    block8.style.backgroundColor = "red";
    block9.style.backgroundColor = "red";
    block10.style.backgroundColor = "red";

    let width = 0;
    let width1 = 0;
    let width2 = 0;
    let width3 = 0;
    let width4 = 0;
    let width5 = 0;
    let width6 = 0;
    let width7 = 0;
    let width8 = 0;
    let width9 = 0;
    let width10 = 0;

    let interId = setInterval(bigger, 30);
    let interId1 = setInterval(bigger1, 30);
    let interId2 = setInterval(bigger2, 30);
    let interId3 = setInterval(bigger3, 30);
    let interId4 = setInterval(bigger4, 30);
    let interId5 = setInterval(bigger5, 30);
    let interId6 = setInterval(bigger6, 30);
    let interId7 = setInterval(bigger7, 30);
    let interId8 = setInterval(bigger8, 30);
    let interId9 = setInterval(bigger9, 30);
    let interId10 = setInterval(bigger10, 30);

    function bigger() {
        if (width == 90) {
            clearInterval(interId);
            block.style.backgroundColor = "green";
            // button.innerHTML = "reset";
        } else {
            width++;
            block.style.width = `${width}%`;
            block.innerText = `${width}%`;
            block.style.color = "white";
            block.style.display = "flex";
            block.style.alignItems = "center";
        }
    }
    function bigger1() {
        if (width1 == 80) {
            clearInterval(interId1);
            block1.style.backgroundColor = "green";
            // button.innerHTML = "reset";
        } else {
            width1++;
            block1.style.width = `${width1}%`;
            block1.innerText = `${width1}%`;
            block1.style.color = "white";
            block1.style.display = "flex";
            block1.style.alignItems = "center";
        }
    }
    function bigger2() {
        if (width2 == 70) {
            clearInterval(interId2);
            block2.style.backgroundColor = "green";
            // button.innerHTML = "reset";
        } else {
            width2++;
            block2.style.width = `${width2}%`;
            block2.innerText = `${width2}%`;
            block2.style.color = "white";
            block2.style.display = "flex";
            block2.style.alignItems = "center";
        }
    }
    function bigger3() {
        if (width3 == 65) {
            clearInterval(interId3);
            block3.style.backgroundColor = "orange";
            // button.innerHTML = "reset";
        } else {
            width3++;
            block3.style.width = `${width3}%`;
            block3.innerText = `${width3}%`;
            block3.style.color = "white";
            block3.style.display = "flex";
            block3.style.alignItems = "center";
        }
    }
    function bigger4() {
        if (width4 == 80) {
            clearInterval(interId4);
            block4.style.backgroundColor = "green";
            // button.innerHTML = "reset";
        } else {
            width4++;
            block4.style.width = `${width4}%`;
            block4.innerText = `${width4}%`;
            block4.style.color = "white";
            block4.style.display = "flex";
            block4.style.alignItems = "center";
        }
    }
    function bigger5() {
        if (width5 == 20) {
            clearInterval(interId5);
            block5.style.backgroundColor = "red";
            // button.innerHTML = "reset";
        } else {
            width5++;
            block5.style.width = `${width5}%`;
            block5.innerText = `${width5}%`;
            block5.style.color = "white";
            block5.style.display = "flex";
            block5.style.alignItems = "center";
        }
    }
    function bigger6() {
        if (width6 == 55) {
            clearInterval(interId6);
            block6.style.backgroundColor = "orange";
            // button.innerHTML = "reset";
        } else {
            width6++;
            block6.style.width = `${width6}%`;
            block6.innerText = `${width6}%`;
            block6.style.color = "white";
            block6.style.display = "flex";
            block6.style.alignItems = "center";
        }
    }
    function bigger7() {
        if (width7 == 90) {
            clearInterval(interId7);
            block7.style.backgroundColor = "green";
            // button.innerHTML = "reset";
        } else {
            width7++;
            block7.style.width = `${width7}%`;
            block7.innerText = `${width7}%`;
            block7.style.color = "white";
            block7.style.display = "flex";
            block7.style.alignItems = "center";
        }
    }
    function bigger8() {
        if (width8 == 60) {
            clearInterval(interId8);
            block8.style.backgroundColor = "orange";
            // button.innerHTML = "reset";
        } else {
            width8++;
            block8.style.width = `${width8}%`;
            block8.innerText = `${width8}%`;
            block8.style.color = "white";
            block8.style.display = "flex";
            block8.style.alignItems = "center";
        }
    }
    function bigger9() {
        if (width9 == 60) {
            clearInterval(interId9);
            block9.style.backgroundColor = "green";
            // button.innerHTML = "reset";
        } else {
            width9++;
            block9.style.width = `${width9}%`;
            block9.innerText = `${width9}%`;
            block9.style.color = "white";
            block9.style.display = "flex";
            block9.style.alignItems = "center";
        }
    }
    function bigger10() {
        if (width10 == 30) {
            clearInterval(interId10);
            block10.style.backgroundColor = "red";
            // button.innerHTML = "reset";
        } else {
            width10++;
            block10.style.width = `${width10}%`;
            block10.innerText = `${width10}%`;
            block10.style.color = "white";
            block10.style.display = "flex";
            block10.style.alignItems = "center";
        }
    }
}
window.addEventListener("load", progress);
