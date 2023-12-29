function toggleMenu() {
    var el = document.getElementById("popover-menu");
    var burger = document.getElementById("cmp-burger-menu");
    if(el.classList.contains("active")) {
        el.classList.remove("active");
        burger.classList.remove("active");
    } else {
        el.classList.add("active");
        burger.classList.add("active");
    }
}

function noScroll() {
    window.scrollTo(0, 0);
}

function disableScroll() {
    // add listener to disable scroll
    window.addEventListener('scroll', noScroll);
}

function enableSroll() {
    // Remove listener to re-enable scroll
    window.removeEventListener('scroll', noScroll);
}

function changeHeaderOpacity() {
    var percent = Math.min(window.scrollY, 200)/2
    var alpha = 0.4 + 0.6 * percent / 100
    document.getElementsByTagName("header")[0].style = "background-color: rgba(255, 255, 255, "+alpha+");"
}

window.addEventListener('scroll', changeHeaderOpacity);
changeHeaderOpacity();

ScrollReveal().reveal('.anim-fadein-apparition', { 
    opacity: 0,
    duration: "2000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-left-apparition', { 
    distance: '60px' ,
    opacity: 0,
    origin: "left",
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-right-apparition', { 
    distance: '60px',
    opacity: 0,
    delay: 100,
    origin: "right",
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-fadein-bottom-apparition', { 
    distance: '60px',
    opacity: 0,
    origin: "bottom",
    duration: "1000",
    easing: "linear"
});

ScrollReveal().reveal('.anim-bottom-apparition', { 
    distance: '60px',
    opacity: 1.0,
    origin: "bottom",
    duration: "1000",
    easing: "linear"
});

function submit() {
    document.getElementsByTagName("form")[0].submit()
}

function getURLParameters() {
    const queryString = window.location.search;
    return new URLSearchParams(queryString);
}

function displayThanksMessage(formId, thanksId) {
    if(document.getElementById(formId) == null) { return }
    let param = getURLParameters().get('submitted')

    document.getElementById(formId).style.display = (param != "true" ? "flex" : "none");
    document.getElementById(thanksId).style.display = (param == "true" ? "flex" : "none");
}

displayThanksMessage("contact-form-button", "contact-thanks");