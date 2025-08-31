// console.log({
//     "inner-width":window.innerWidth,
//     "inner-height":window.innerHeight,
//     "outer-width":window.outerWidth,
//     "outer-height":window.outerHeight,
//     "screen.width":screen.width,
//     "screen.height":screen.height,
//     "screen.avail-width":screen.availWidth,
//     "screen.availHeight":screen.availHeight
// });
window.addEventListener("resize", checkResize);
window.addEventListener("load", checkResize);
document.addEventListener("resize", checkResize);
document.addEventListener("load", checkResize);

function checkResize() {
    if (Window.innerWidth >= 670 ||
        Window.outerWidth >= 670 ||
        screen.width >= 670 ||
        screen.availWidth >= 670) {
        document.querySelector(".decrease").classList.add("w-50")
    } else {
        document.querySelector(".decrease").classList.remove("w-50")
    }
}


function chgrisl() {
    let ch = document.querySelector(".change-mode");

    if (ch.type == "password") {
        ch.type = "text";
    } else if (ch.type == "text") {
        ch.type = "password";
    }
}



function passwordMode() {
    let passInput = document.querySelector("#pass-md").value.toString();
    let imgMode = document.querySelector("#password-mode");
    console.log({
        "length": passInput.length
    });
    // let passInputLen = passInput.length;
    if (passInput.trim() == "" || passInput.length == 0) {
        imgMode.src = "../svg/password mode/very_weak.svg";
        imgMode.title = "very weak password";
    }else{
        if (passInput.length <= 5) {
            console.log("%c weak password", "color:orange");
            imgMode.src = "../svg/password mode/weak.svg";
            imgMode.title = "weak password";
        } else if (passInput.length > 5 && passInput.length <= 10) {
            if (passInput.match(/[a-z]/g) || passInput.match(/[A-Z]/g) || passInput.match(/[0-9]/g) || passInput.match(/[!,@,#,$,%,^,&]/g)) {
                if (passInput.match(/[a-z]/g) && passInput.match(/[A-Z]/g) && passInput.match(/[0-9]/g)) {
                    console.log("%c good password", "color:yellowgreen");
                    imgMode.src = "../svg/password mode/good.svg";
                    imgMode.title = "good password";
                }
            }
        } else if (passInput.length > 10 && passInput.length <= 50) {
            if (passInput.match(/[a-z]/g) || passInput.match(/[A-Z]/g) || passInput.match(/[0-9]/g) || passInput.match(/(!|@|#|$|%|^|&)/g)) {
                if (passInput.match(/[a-z]/g) && passInput.match(/[A-Z]/g) && passInput.match(/[0-9]/g) && passInput.match(/[!,@,#,$,%,^,&]/g)) {
                    console.log("%c strong password", "color:green");
                    imgMode.src = "../svg/password mode/strong.svg";
                    imgMode.title = "strong password";
                }
            }
        }else if (passInput.length > 50) {
            if (passInput.match(/[a-z]/g) || passInput.match(/[A-Z]/g) || passInput.match(/[0-9]/g) || passInput.match(/(!|@|#|$|%|^|&)/g)) {
                if (passInput.match(/[a-z]/g) && passInput.match(/[A-Z]/g) && passInput.match(/[0-9]/g) && passInput.match(/[!,@,#,$,%,^,&]/g)) {
                    console.log("%c excellent password", "color:green");
                    imgMode.src = "../svg/password mode/excellent.svg";
                    imgMode.title = "excellent password";
                }
            }
        }
    }
}