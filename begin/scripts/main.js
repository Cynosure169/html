let myImg = document.querySelector('img')

myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'image/firefox-icon.png') {
        myImg.setAttribute('src', 'image/firefox2.png');
    } else {
        myImg.setAttribute('src', 'image/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName == null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storeName;
}

myButton.onclick = function () {
    setUserName();
}