const date = new Date();
const year = (date.getFullYear());
const links = document.querySelectorAll(".nav-link");
const y = document.querySelectorAll(".y");
const y2 = document.querySelector("#prev_y");

var currentPath = window.location.href;

if (currentPath.includes("/index.html")) {
    document.title = `CS50 '${year % 100}`;
} else {
    document.title = `${document.title} - CS50 '${year % 100}`;
}

y.forEach(y => {
    y.innerHTML = year;
})

y2.innerHTML = (year - 1);


// active page

links.forEach(link => {
    if (link.href == currentPath) {
        link.classList.add("active");
    }
})