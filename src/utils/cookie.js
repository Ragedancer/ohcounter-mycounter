export function newCookie(cname, cvalue, exdays){
    if (!checkCookie(cname) || checkCookieContents(cname,cvalue)) {
        setCookie(cname,cvalue,exdays);
    }
}

// cvalue will be a json variable
export function setCookie(cname, cvalue, exdays) {

    if(exdays==null){
        exdays=99999;
    }
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return "";
}

// Check if cookie exist
export function checkCookie(cookieName) {
    return (document.cookie.indexOf(cookieName + '=') !== -1) ? true : false;
}

// Check to see if cvalue differs from cookie
export function checkCookieContents(cookieName, cvalue) {
    let cookieStr = JSON.stringify(getCookie(cookieName));
    let dataStr = JSON.stringify(cvalue);

    return (dataStr !== cookieStr) ? true : false;
}