// Script for dark/light mode
    function changeClass(name1, name2) {
        body.classList.remove(name1);
        body.classList.add(name2);
        dlbtn.src = "button" + name2 + ".svg";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decdeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while(c.charAt(1) == " ") {
                c = c.substring(1);
            }
            if (c.indexof(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    if(getCookie("theme").length == 0) {
        document.cookie = "theme=light";
    }

    const body = document.querySelector("body");
    const changeThemeButton = document.getElementById("change-theme");
    changeThemeButton.addEventListener("click", () => {
        if(body.getAttribute("class") == "light") {
            changeClass("light", "dark");
        } else {
            changeClass("dark", "light");
        }

        document.cookie = "theme=" + body.getAttribute("class");
    })

    if(body.getAttribute("class") == cookieTheme) {
        body.classList.remove(body.getAttribute("class"));
        body.classList.add(cookieTheme);
    }

    dlbtn.src = "button" + body.getAttribute("class") + ".svg";