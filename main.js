let currentAniName;

window.addEventListener("load", (event) => {
    for ( let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card")[i].addEventListener("click",ClickOpenbtn);
    }

    document.getElementById("close-btn").addEventListener("click",CloseStory);

   
   
});

const ClickOpenbtn = (event) => {
currentAniName = `${event.target.id}Story`;
document.getElementById(`${event.target.id}Story`).style.display = "block";
document.getElementById("close-btn").style.display = "block";
}

const CloseStory = (event) => {
  
    document.getElementById(currentAniName).style.display = "none";
    document.getElementById("close-btn").style.display = "none";
   
    }

