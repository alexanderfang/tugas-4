window.addEventListener("scroll", function () {
    myScrollNavbar();
}, false);

function myScrollNavbar() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("my-nav").style.opacity = "1";
    } else {
        document.getElementById("my-nav").style.opacity = ".6";
    }
}