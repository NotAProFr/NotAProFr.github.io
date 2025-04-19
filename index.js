const sopraIndice = document.querySelectorAll(".sopraIndice");

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


const imgT = document.querySelectorAll(".mtTP1");
const txtT = document.getElementsByClassName("P1");

imgT.forEach(element => {
let isVisible = false; 

element.addEventListener("click", () => {
    const child = element.children[0];
    if (!isVisible) {
        child.style.transition = "200ms";
        child.style.display = "block";
        child.style.backgroundColor = "white";
        child.style.borderRadius = "5px";
        setTimeout(() => {
            child.style.transform = "translateY(-5px)";
        }, 100);
        isVisible = true; 
    } else {
        child.style.transition = "100ms";
        child.style.transform = "translateY(5px)";
        setTimeout(() => {
            child.style.display = "none";
        }, 100);
        isVisible = false; 
    }
});
});
