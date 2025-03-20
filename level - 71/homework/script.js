let drop = document.getElementsByClassName("drop");

function click(drop){
    drop.addEventListener("click", () => {
        let img = drop.getElementsByTagName("img")[0];
        let p = drop.parentElement.getElementsByTagName("p")[0];

        if (p.style.display != "none") {
            img.src = "./assets/images/icon-plus.svg";
            p.style.display = "none";
        } else {
            img.src = "./assets/images/icon-minus.svg";
            p.style.display = "block";
        }
    });
    
}

click(drop[0])
click(drop[1])
click(drop[2])
click(drop[3])


