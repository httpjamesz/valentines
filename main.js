onload = () =>{
        document.body.classList.remove("container");
};

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "RiverFlowsInYou.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
})
