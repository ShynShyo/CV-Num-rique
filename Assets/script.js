// ----------------------------------------------------Blocs Porte Ascenseur------------------------------------------------------//

// var leftMove = document.getElementById('leftSide');

// window.addEventListener('load', () => {
//     leftMove.
// }


//-----------------------------------------------------Progress  Bar HTML-------------------------------------------------------------//

var m = 0;
window.addEventListener('scroll', function moveBar() {
    if (m == 0) {
        m = 1;
        var htmlBar = document.getElementById('htmlProgressBar');
        var width = 1;
        var id = setInterval(frame, 30);
        function frame() {
            if (width >= 75) {
                clearInterval(id);
                m = 0;
            } else {
                width++;
                htmlBar.style.width = width + '%';
            }
        }

    }
})

//------------------------------------------------------Progress Bar CSS----------------------------------------------------------------//

var c = 0;
window.addEventListener('scroll', function moveCssBar() {
    if (c == 0) {
        c = 1;
        var cssBar = document.getElementById('cssProgressBar');
        var width = 1;
        var id = setInterval(frame, 30);
        function frame() {
            if (width >= 75) {
                clearInterval(id);
                c = 0;
            } else {
                width++;
                cssBar.style.width = width + '%';
            }
        }

    }
})


//------------------------------------------------------Progress Bar Bootstrap----------------------------------------------------------//

var b = 0;
window.addEventListener('scroll', function moveBsBar() {
    if (b == 0) {
        b = 1;
        var bsBar = document.getElementById('bsProgressBar');
        var width = 1;
        var id = setInterval(frame, 30);
        function frame() {
            if (width >= 50) {
                clearInterval(id);
                b = 0;
            } else {
                width++;
                bsBar.style.width = width + '%';
            }
        }

    }
})


//-----------------------------------------------------------Text Draw Name----------------------------------------------------------------------//

var txt = 'Clovis Blin';
var t = 0;
var speed = 70;

window.addEventListener('load', function typeWriter() {
    if (t < txt.length) {
        document.getElementById('textDrawName').innerHTML += txt.charAt(t);
        t++;
        setTimeout(typeWriter, speed);
    }
})

//-----------------------------------------------------------Text Draw Job----------------------------------------------------------------------//

var txtWD = 'Web-Designer';
var w = 0;
var speed = 100;

window.addEventListener('load', function typeWriterWD() {
    if (w < txtWD.length) {
        document.getElementById('textDrawWD').innerHTML += txtWD.charAt(w);
        w++;
        setTimeout(typeWriterWD, speed);
    }
})