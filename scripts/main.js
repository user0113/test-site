let myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/test.jpg') {
        myImg.setAttribute('src', 'images/test2.jpg');
    } else {
        myImg.setAttribute('src', 'images/test.jpg');
    }
}

let myBtn = document.querySelector('button');
let myHed = document.querySelector('h1');

function setUsrN() {
let myName = prompt('Enter Name');
if(!myName) {
    setUsrN();
} else {
localStorage.setItem('name', myName);
myHed.textContent = `Smell ya later ${myName}!`;
}
}

if(!localStorage.getItem('name')) {
    setUsrN();
} else {
    let storedName = localStorage.getItem('name');
    myHed.textContent = 'Mozilla is cool, ' + storedName;
}

myBtn.onclick = function() {
    setUsrN();
}