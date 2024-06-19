const links = document.querySelector("#five");
const lines = document.querySelectorAll("#bugger");
const cancel = document.querySelector("#times");
const options = document.querySelector("#options");
const body = document.querySelector("#body");
const nav = document.querySelector("#nav");
lines.forEach(line => {
    line.addEventListener('click', (e) => {
        links.style.display = "inherit"
        cancel.style.display = "inherit"
        options.style.display = "none"
        body.style.overflow = "hidden"
    });
});
const cancel1 = document.querySelector("#times")
cancel1.addEventListener("click", () => {
    links.style.display = "none"
    options.style.display = "block"
    cancel.style.display = "none"
    body.style.overflow = "visible"
});
//getting the  current year.
let currentYear = document.querySelector("#new");
let thisYear = new Date();
let year = thisYear.getFullYear();
currentYear.innerHTML = year

//changing the nav background-color on ScrollY=20;
function changeBg(params) {
    const nav = document.querySelector("#nav");
    window.addEventListener("scroll", function () {
        const scrollValue = window.scrollY;
        if (scrollValue >= 30) {
            nav.classList.add("bgColor")
        } else {
            nav.classList.remove("bgColor")
        }
    });
}
changeBg();





