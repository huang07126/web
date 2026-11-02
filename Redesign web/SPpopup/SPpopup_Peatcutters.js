/*this part uses AI tool*/
var purecookieTitle = "This website is a student project.";
var purecookieDesc = "Visit the real website:Intouch Foundation";
var purecookieLink = '<a href="https://www.intouchfoundation.co.uk" target="_blank">https://www.intouchfoundation.co.uk</a>';
var purecookieButton = "Understood";

function pureFadeIn(elem, display) {
    var el = document.getElementById(elem);
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function pureFadeOut(elem) {
    var el = document.getElementById(elem);
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .02) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function cookieConsent() {
    if (!getCookie('purecookieDismiss')) {
        var div = document.createElement('div');
        div.className = 'cookieConsentContainer';
        div.id = 'cookieConsentContainer';
        div.innerHTML =
            '<div class="cookieTitle"><a>' + purecookieTitle + '</a></div>' +
            '<div class="cookieDesc"><p>' + purecookieDesc + ' ' + purecookieLink + '</p></div>' +
            '<div class="cookieButton"><a onclick="purecookieDismiss();">' + purecookieButton + '</a></div>';
        document.body.appendChild(div);
        pureFadeIn("cookieConsentContainer");
    }
}

function purecookieDismiss() {
    setCookie('purecookieDismiss', '1', 0);
    pureFadeOut("cookieConsentContainer");
}

window.addEventListener('load', function () {
    cookieConsent();
});
/**/