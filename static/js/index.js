var modal = document.querySelector(".modal");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
// note these are case sensitive
const username = "blooket";
const password = "cert";

document.querySelector(".submitbtn").addEventListener("click", function () {
    if (document.querySelector(".usernameinput").value == username && document.querySelector(".passwordinput").value == password) {
        var logtext = document.querySelector(".logtext");
        var typewriter = new Typewriter(logtext, {
            loop: false,
            delay: 75,
        });

        typewriter
            .deleteChars(5)
            .typeString('BLKT Proxy')
            .start();

        document.querySelector(".passwordlog").style.display = "none";
        document.querySelector(".modalHeader").innerHTML = "Welcome To BLKT!"
        document.querySelector(".modalDesc").innerHTML = " BLKT is a simple but usefull unblocker for school computers ! <a href='https://discord.gg/RK9cGEQDF9' target='_blank'>Join our discord</a>"
        document.querySelector(".modalBtn").innerHTML = "Continue"
        toggleModal();
        document.querySelector(".googlebtn").innerHTML = "<i class='discord-ico fa-brands fa-discord fa-xl'></i>    Join our discord";
        document.querySelector(".usernameinput").style.display = "none";
        document.querySelector(".usericon").outerHTML = "<i class='usericon fas fa-search'></i>";
        document.querySelector(".submitbtn").style.display = "none";
        document.querySelector(".searchbtn").style.display = "block";
        document.querySelector(".special-input").style.display = "block";
        document.querySelector(".forgotpass").outerHTML = "<a onclick='togglesettings();' class='forgotpass'>Settings</a>";
        document.querySelector(".googlebtn").addEventListener("click", function () {
            // open new tab
            window.open("https://discord.gg/RK9cGEQDF9", "_blank");
        })
    } else {
        document.querySelector(".modalHeader").innerHTML = "An Error has occured..."
        document.querySelector(".modalDesc").innerHTML = "Woops looks like you inputed the wrong login info! please press <code>Try again</code> to retry!"
        document.querySelector(".modalBtn").innerHTML = "Try again?"
        toggleModal();
    }
});



document.querySelector(".modalBtn").addEventListener("click", function () {
    toggleModal();
})









function exitPage() {
    document.querySelector("iframe").src = '';
    document.querySelector(".Logcontaner2").style.display = "none";
    document.querySelector(".iframeControlls").style.display = "none";
}

function reloadPage() {
    document.querySelector("iframe").src += "";
}






var draggable = document.querySelector('.draggable');
var offset = {
    x: 0,
    y: 0
};


draggable.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseUp() {
    window.removeEventListener('mousemove', draggableMove, true);
}

function mouseDown(e) {
    offset.x = e.clientX - draggable.offsetLeft;
    offset.y = e.clientY - draggable.offsetTop;
    window.addEventListener('mousemove', draggableMove, true);
}

function draggableMove(e) {
    draggable.style.position = 'absolute';
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
    draggable.style.top = top + 'px';
    draggable.style.left = left + 'px';
}



// Tab Cloaking Provided by DegenDev @ https://github.com/Degen-dev/Degeneracy/blob/master/public/scripts/main.js
let
    title = localStorage.getItem("title"),
    icon = localStorage.getItem("icon"),
    cloakInput = document.querySelector(".cloakInput"),
    pageicon = document.querySelector(".imageChange");

function tabtitle() {
    window.localStorage.setItem("title", cloakInput.value);
    window.document.title = cloakInput.value;
};

if (window.localStorage.hasOwnProperty('title')) {
    document.title = title;
};

//Tab Icon
function tabicon() {
    document.querySelector(".favicon").href = cloakInput.value;
    window.localStorage.setItem("icon", cloakInput.value);
};

if (window.localStorage.hasOwnProperty("icon")) {
    document.querySelector(".favicon").href = icon;

};


//Clears Tab Icon and Title
function resetTab() {
    let items = ["icon", "title"];

    items.forEach(item =>
        localStorage.removeItem(item));
    window.location.reload();
};

