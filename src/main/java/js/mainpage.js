function size() {
    document.getElementById('news').onmouseover = function () {
        this.style = " transform: scale(1.2); transition:1s;"
    }
    document.getElementById('news').onmouseleave = function () {
        this.style = "width:20%; height:10vmax; transition:1s;"
    }

    document.getElementById('aboutus').onmouseover = function () {
        this.style = "transform: scale(1.2); transition:1s;"
    }
    document.getElementById('aboutus').onmouseleave = function () {
        this.style = "width:20%; height:10vmax; transition:1s;"
    }

    document.getElementById('interview').onmouseover = function () {
        this.style = "transform: scale(1.2); transition:1s;"
    }
    document.getElementById('interview').onmouseleave = function () {
        this.style = "width:20%; height:10vmax; transition:1s;"
    }

    document.getElementById('contacts').onmouseover = function () {
        this.style = "transform: scale(1.2); transition:1s;"
    }
    document.getElementById('contacts').onmouseleave = function () {
        this.style = "width:20%; height:10vmax; transition:1s;"
    }
}

function abouts() {
    window.location = "http://localhost:63342/Portfolio/about.html?_ijt=28cjsp62tes6ghrlpq5829u147"
}