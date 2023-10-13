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

// Cookies
function checkCookiesStatus() {
    var status = getCookie("cookiesAccepted")
    if (status == "") {
        return
    }

    document.getElementById("cookies-banner").style.display = "none";
    
    if (status == "true") {
        startGA()
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