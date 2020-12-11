let messages = []
let nouns = ["собака", "кот", "человек", "рука", "ребенок"]
let verbs = ["говорит", "идет", "может", "слушает", "спит"]
let j = -1;
let clicks = 0

function loadchat() {
    document.getElementById('send').onclick = function () {
        clicks += 2
        if (document.getElementById("chatmessage").value !== "") {
            j++
            messages.push({message: document.getElementById("chatmessage").value, id: j})
            j++
            clicks = j
            messages.push({
                message: nouns[Math.round(Math.random() * 4)] + " " + verbs[Math.round(Math.random() * 4)],
                id: 100000
            })
        }
        if (j >= 0 && (j - clicks) === 0) {
            const element = document.getElementById("allmessages");
            element.innerHTML = ""
            messages.forEach((message) => {
                    if (message.id !== 100000) {
                        element.innerHTML += "<div class='message'>" + "Message: " + message.message + "</div> " +
                            "<button id='j' onclick='deletex(" + message.id + ")'>X</button><br />"
                    } else {
                        element.innerHTML += "<div class='message' style='float: right; display: block '>"
                            + "Message: " + message.message + "</div><br/><br/><br/>"

                    }
                }
            )
        }
    }
}

function deletex(id) {
    messages.splice(id, 1)
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].id !== 100000 && messages[i].id > id)
            messages[i].id--
    }
    j--
    clicks--
    const element = document.getElementById("allmessages");
    element.innerHTML = ""
    messages.forEach((message) => {
            if (message.id !== 100000) {
                element.innerHTML += "<div class='message'>" + "Message: " + message.message + "</div> " +
                    "<button id='j' onclick='deletex(" + message.id + ")'>X</button><br />"
            } else {
                element.innerHTML += "<div class='message' style='float: right;'>"
                    + "Message: " + message.message + "</div><br/><br/><br/>"

            }
        }
    )
}