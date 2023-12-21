let back = document.querySelector(".wrapper");

// Soda can and Main background
let can = document.querySelector('.can');
let arr = ["100%","0.4%","50%"];

document.querySelector('.wrapper').addEventListener("click", myFunc);

// Fruit Backgrounds
let car1 = document.querySelector(".car-1");
let car2 = document.querySelector(".car-2");
let car3 = document.querySelector(".car-3");

let arr1 = ["125%","-150%","-150%"];
let arr2 = ["150%","-150%","0%"];
let arr3 = ["0%","-75%","0%"];


// Texts in background
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");

let txt1 = ["-100%","100%","-100%"];
let txt2 = ["-100%","100%","0%"];
let txt3 = ["-100%","100%","100%"];

// Mint leaves 
let mint1 = document.querySelector("#minty1");
let mint2 = document.querySelector("#minty2");

let mintyArr1 = [
    [270,60,"130deg"],
    [30,50,"0deg"],
    [270,450,"180deg"]
]
let mintyArr2 = [
    [-120,470,"160deg"],
    [150,440,"50deg"],
    [-100,60,"-120deg"]
]

let i = 0;

function myFunc(event) {
    back.style.backgroundPosition = `${arr[i]}`;
    can.style.backgroundPosition = `center, ${arr[i]}`;

    if(arr2[i] == '-150%'){
        car2.style.transition = `all 0.3s step-end`;
    } else{
        car2.style.transition = `all 1s`;
    }

    //fruits transformation
    car1.style.transform = `translate(0%,${arr1[i]})`;
    car2.style.transform = `translate(0%,${arr2[i]})`;
    car3.style.transform = `translate(0%,${arr3[i]})`;

    //text transformation
    text1.style.transform = `translateX(${txt1[i]})`;
    text2.style.transform = `translateX(${txt2[i]})`;
    text3.style.transform = `translateX(${txt3[i]})`;
    
    //mint leaves transformation
    mint1.style.transform = `translate(${mintyArr1[i][0]}px,${mintyArr1[i][1]}px) rotate(${mintyArr1[i][2]})`;
    mint2.style.transform = `translate(${mintyArr2[i][0]}px,${mintyArr2[i][1]}px) rotate(${mintyArr2[i][2]})`;

    i = (i + 1)%3;
}