function toggleMenu() {
    var el = document.getElementById("popover-menu");
    var burger = document.getElementById("cmp-burger-menu");
    if(el.classList.contains("active")) {
        el.classList.remove("active");
        burger.classList.remove("active");
        enableSroll();
    } else {
        el.classList.add("active");
        burger.classList.add("active");
        disableScroll();
    }
}

checkCookiesStatus();

function acceptCookies() {
    setCookie("cookiesAccepted", "true")
    checkCookiesStatus()
}

function refuseCookies() {
    setCookie("cookiesAccepted", "false")
    checkCookiesStatus()
}

function startGA() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-139459528-1');
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}