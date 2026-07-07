import Toast from "./Toast"

function toast(text) {
    var toast_cont = document.getElementsByClassName("toast-box")[0]
    toast_cont.appendChild(<Toast/>);
}