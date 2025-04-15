const sopraIndice = document.querySelectorAll(".sopraIndice");
let menu = document.getElementsByClassName("material-symbols-outlined")
let click = 0

sopraIndice.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.transition = "200ms";
        element.style.transform = "translateY(-5px)";
        element.style.backgroundColor = "rgba(0, 0, 0, 0.64)";

    });

    element.addEventListener("mouseout", () => {
        element.style.transition = "200ms";
        element.style.transform = "translateY(0)";
        element.style.backgroundColor = "black";

    });
});


