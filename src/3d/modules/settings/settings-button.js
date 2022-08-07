// Import
import { get3dModel, set3dModel } from "../../utils/model-handler";
import { loadModel, renderer } from "../world";

let leftBarActions = null;

const sidebars_buttons = document.querySelectorAll('.right-modal');

// adding a click event to all the buttons
for (var i = 0; i < sidebars_buttons.length; i++) {
    sidebars_buttons[i].addEventListener('click', openLeftMenu);
}

// Setting button handler
document.getElementById("settings-3d").addEventListener('click', openRightMenu);

document.getElementById("settingsClose").addEventListener('click', closeRightMenu);

document.getElementById("leftBarClose").addEventListener('click', closeLeftMenu);

document.getElementById("background-color-pickcer").addEventListener("change", colorPickcer);

function colorPickcer(e) {
    const hex = String(e.target.value);
    renderer.setClearColor(hex, 1);
}

function changeModels() {
    const modelId = parseInt(get3dModel().id) + 1;
    set3dModel(modelId);
    document.getElementById("leftMenu").style.display = "none";
    document.getElementById("rightMenu").style.display = "none";
    window.location.reload();
}

function handlerLeftSideBar(e) {
    // to get the correct effect
    const action = e.target.getAttribute('data-action');
    switch (action) {
        case "background-selector":
            leftBarActions = document.getElementById("background-color-pickcer");
            leftBarActions.style.display = "block";
            break;
        case "change-model":
            changeModels();
            break;
        case "change-model-expressions":
            break;
        case "effects":
            break;
        default:
            break;
    }
}

function openLeftMenu(e) {
    handlerLeftSideBar(e);
    if (e.target.getAttribute('data-action') !== "change-model") document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
    if (leftBarActions) {
        leftBarActions.style.display = "none";
    }
    document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}