let drop = document.getElementsByClassName("drop");

for (let i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", () => {
        let img = drop[i].getElementsByTagName("img")[0];
        let p = drop[i].parentElement.getElementsByTagName("p")[0];

        if (p.style.display == "" || p.style.display == "none") {
            img.src = "./assets/images/icon-minus.svg";
            p.style.display = "block";
        } else {
            img.src = "./assets/images/icon-plus.svg";
            p.style.display = "none";
        }
    });
}
