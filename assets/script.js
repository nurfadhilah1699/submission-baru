let btn = document.getElementsByClassName("tombol");
let slide = document.getElementById("slide");

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for (let i = 0; i < 3; i++) {
        btn[i].classList.remove("active");     
    }
    this.classList.add("active");
}
btn[1].onclick = function() {
    slide.style.transform = "translateX(-560px)";
    for (let i = 0; i < 3; i++) {
        btn[i].classList.remove("active");     
    }
    this.classList.add("active");
}
btn[2].onclick = function() {
    slide.style.transform = "translateX(-1120px)";
    for (let i = 0; i < 3; i++) {
        btn[i].classList.remove("active");     
    }
    this.classList.add("active");
}