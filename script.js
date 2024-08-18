const date = new Date();
const year = (date.getFullYear());
const links = document.querySelectorAll(".nav-link");
const current_year = document.querySelectorAll(".y");

var currentPath = window.location.href;

if (currentPath.includes("/pages/")) {
    document.title = `${document.title} - CS50 '${year % 100}`;
} else {
    document.title = `CS50 '${year % 100}`;
}

current_year.forEach(y => {
    current_year.innerHTML = year;
})

// active page

links.forEach(link => {
    if (link.href == currentPath) {
        link.classList.add("active");
    }
})