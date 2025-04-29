
window.addEventListener("load", function(){
    this.setTimeout(function(){
        document.getElementById("loader").style.display = "none";
        document.getElementById("sfondo").style.display = "block";
    }, 2000)
    

})






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








const clickable = Array.from(document.querySelectorAll(".tTitle"))
let sottoArgomenti = document.querySelectorAll(".sottoArgomento")

const sottoArgomentiOriginal = [...sottoArgomenti]

clickable.forEach(element => {element.addEventListener("click", (event) =>{
    
    
    

   
    let sibling = event.target.nextElementSibling
    
    
    const elements = document.getElementsByClassName("sottoArgomento");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] !== sibling) {
            elements[i].style.display = "none";
        }
    }
  
    const siblingDisplay = window.getComputedStyle(sibling).display

    if (siblingDisplay === "none") {
        sibling.style.display = "flex"
    } else {
        sibling.style.display = "none"
    }
    
    
})
    
});





















let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
}

function callback (entries, observer) {
    objData = entries[0]
    let element = objData.target
    if (objData.isIntersecting) {
        animazione(element)
        observer.unobserve(element)
    }
    
}

let observer = new IntersectionObserver(callback,options)

let element = document.getElementById("cerchio")

observer.observe(element)

function animazione(element) {
    display = "block"
    element.style.animationName = "coming"
    element.style.animationDuration = "8s"
    setTimeout(() => {
        element.style.transform = "translateX(70px)"
    }, 5000);
    
    
}