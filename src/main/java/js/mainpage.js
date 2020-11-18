function size() {
    document.getElementById('news').onmouseover = function () {
        this.style.transform = "scale(1.2)"
        this.style.transition = "1s"
        this.style.cursor = "pointer"
    }

    document.getElementById('news').onmouseleave = function () {
        this.style.transform = "scale(1)"
        this.style.transition = "1s"
    }

    document.getElementById('aboutus').onmouseover = function () {
        this.style.transform = "scale(1.2)"
        this.style.transition = "1s"
        this.style.cursor = "pointer"
    }

    document.getElementById('aboutus').onmouseleave = function () {
        this.style.transform = "scale(1)"
        this.style.transition = "1s"
    }

    document.getElementById('interview').onmouseover = function () {
        this.style.transform = "scale(1.2)"
        this.style.transition = "1s"
        this.style.cursor = "pointer"
    }

    document.getElementById('interview').onmouseleave = function () {
        this.style.transform = "scale(1)"
        this.style.transition = "1s"
    }

    document.getElementById('contacts').onmouseover = function () {
        this.style.transform = "scale(1.2)"
        this.style.transition = "1s"
        this.style.cursor = "pointer"
    }

    document.getElementById('contacts').onmouseleave = function () {
        this.style.transform = "scale(1)"
        this.style.transition = "1s"
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
    var doe = document.getElementById("do")
    doe.onclick = function (event) {
        console.log(event.target.closest('img'))
        if (event.target.closest('img')) {
            showThumbnail(event.target.closest('img').src)
        }
    }

    function showThumbnail(href) {
        document.getElementById("mainphoto").src = href;
    }

}

function abouts() {
    window.location = "http://localhost:63342/Portfolio/about.html?_ijt=28cjsp62tes6ghrlpq5829u147"
}

