// var navmenu = document.querySelectorAll('.nav-list a');
// for (var i = 0; i < navmenu.length; i++) {
//     navmenu[i].addEventListener('click', function (event) {
//         event.preventDefault();

//         var targetsectionid = this.textContent.trim().toLowerCase();
//         var section = document.getElementById(targetsectionid);

//         var interval = setInterval(function () {
//             var targetcordinates = section.getBoundingClientRect();
//             if (targetcordinates.top <= 0 ) {
//                 clearInterval( interval);
//                 return;
//             }
//             window.scrollBy(0, 50);
//         }, 20);

//     })
// }

// ANOTHER APPROCH




var navmenu = document.querySelectorAll('.nav-list a');
var interval;  // due to function is outside the scope so inteval is decalare here 
for (var i = 0; i < navmenu.length; i++) {
    navmenu[i].addEventListener('click', function (event) {
        event.preventDefault();

        var targetsectionid = this.textContent.trim().toLowerCase();
        var section = document.getElementById(targetsectionid);

        interval = setInterval(scrollbar, 20, section);  //we cant call function with section parameter in setInterval

    })
}

function scrollbar(section) {
    var targetcordinates = section.getBoundingClientRect();
    if (targetcordinates.top <= 0) {
        clearInterval(interval);
        return;
    }

    else {
        window.scrollBy(0, 50);
    }
}

//SMOOTH SCROLL SECTION END

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillcontainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkscroll);
var result = false;

function intial() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }

}
intial();
function fillbar() {
    for (let bar of progressBars) {
        let targetwidth = bar.getAttribute('data-bar-width');
        let currentwidth = 0;
        let interval = setInterval(function () {
            if (currentwidth > targetwidth) {
                clearInterval(interval);
                return;
            }
           else{
            currentwidth++;
            bar.style.width = currentwidth + '%';
        }

        }, 5);
    }
}


function checkscroll() {
    // here we check skilll section is visible or not
    var cordinates = skillcontainer.getBoundingClientRect();

    if (!result && cordinates.top < window.innerHeight) {
        result = true;
        //start animation
        fillbar();

    }
    else if (cordinates.top > window.innerHeight) {
        result = false;
        intial();
    }
}





