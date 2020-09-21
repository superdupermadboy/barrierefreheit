import "./index.scss";
import "../static/fonts/stylesheet.scss";

let aboutSection;
let infoSection;
let bookSection;

function scrollIntoSection(sectionName) {
    switch (sectionName) {
        case 'about':
            aboutSection.scrollIntoView();
            break;
        case 'info':
            infoSection.scrollIntoView();
            break;
        case 'book':
            bookSection.scrollIntoView();
            break;
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
    const intro = document.getElementById('intro');

    aboutSection = document.getElementById('about');
    infoSection = document.getElementById('info');
    bookSection = document.getElementById('book');


    var list = document.getElementsByClassName('navButtons__info');
    
    for (let button of list) {
        button.onclick = function fun() {
            scrollIntoSection('info');  
        }
    }

    list = document.getElementsByClassName('navButtons__about');
    
    for (let button of list) {
        button.onclick = function fun() {
            scrollIntoSection('about');  
        }
    }

    list = document.getElementsByClassName('navButtons__book');
    
    for (let button of list) {
        button.onclick = function fun() {
            scrollIntoSection('book');  
        }
    }

    setTimeout(() => {
        intro.style.display = 'none';
    }, 2000);
});