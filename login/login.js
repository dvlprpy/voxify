function showHide(param) {
    let show_hide_icon = param.firstChild.classList;
    let passElem = document.querySelector(".show-pass");

    if (show_hide_icon.contains("bi-eye-slash-fill")) {
        show_hide_icon.replace("bi-eye-slash-fill", "bi-eye-fill")
    } else if (show_hide_icon.contains("bi-eye-fill")) {
        show_hide_icon.replace("bi-eye-fill", "bi-eye-slash-fill")
    }

    if(passElem.type == "password"){
        passElem.type = "text"
    }else if(passElem.type == "text"){
        passElem.type = "password"
    }
}


window.addEventListener("resize", checkResizeFunc);
document.addEventListener("resize", checkResizeFunc);
window.addEventListener("load", checkResizeFunc);
document.addEventListener("load", checkResizeFunc);

function checkResizeFunc() {
    
    if (Window.innerWidth >= 670 ||
        Window.outerWidth >= 670 ||
        screen.width >= 670 ||
        screen.availWidth >= 670) {
        document.querySelector(".decrease").classList.add("w-50")
    } else {
        document.querySelector(".decrease").classList.remove("w-50")
    }

}