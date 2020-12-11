function size() {
    var doe = document.getElementById("do")

    window.onmouseover = function (event) {
        switch (event.target.closest('div')) {
            case (document.getElementById('contacts')):
            case (document.getElementById('interview')):
            case (document.getElementById('aboutus')):
            case (document.getElementById('news')):
                event.target.closest('div').style.transform = "scale(1.2)"
                event.target.closest('div').style.transition = "1s"
                event.target.closest('div').style.cursor = "pointer"
                break
        }
    }

    document.getElementById("contacts").onclick = function () {
        document.getElementById("info").style.visibility = "visible"
        document.getElementById("info").style.opacity = "1"
    }

    window.onclick = function (event) {
        if (event.target === document.getElementById("info")) {
            document.getElementById("info").style.visibility = "hidden"
            document.getElementById("info").style.opacity = "0"
        }
    }

    doe.onclick = function (event) {
        if (event.target.closest('img')) {
            showThumbnail(event.target.closest('img').src)
        }
    }

    function showThumbnail(href) {
        document.getElementById("mainphoto").src = href;
    }

}

function onleave(id) {
    document.getElementById(id).style.transform = "scale(1)"
    document.getElementById(id).style.transition = "1s"
}

function abouts() {
    window.location = "http://localhost:63342/Portfolio/about.html?_ijt=28cjsp62tes6ghrlpq5829u147"
}

