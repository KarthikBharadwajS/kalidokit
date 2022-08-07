// Import
import { get3dModel, set3dModel, setBackground } from "../../utils/model-handler";
import { renderer, light } from "../world";

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

document.getElementById("background-color-pickcer").addEventListener("change", backgroundColorPickcer);

document.getElementById("light-color-picker").addEventListener("change", lightColorPicker);

document.getElementById("light-intensity-picker").addEventListener("change", lightIntensityInput);

document.getElementById("light-cast-shadow").addEventListener("change", castShadowHandler);

function castShadowHandler(e) {
    light.castShadow = e.target.checked;
}

function backgroundColorPickcer(e) {
    const hex = String(e.target.value);
    setBackground(hex);
    renderer.setClearColor(hex, 1);
}

function lightColorPicker(e) {
    const hex = String(e.target.value);
    light.color = new THREE.Color(hex);
}

function lightIntensityInput(e) {
    light.intensity = e.target.value / 10;
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
            leftBarActions = document.getElementsByClassName("scene-params");
            for (var i = 0; i < leftBarActions.length; i++) {
                if (leftBarActions[i].classList.contains("inline-box"))
                    leftBarActions[i].style.display = "inline-block";
                else
                    leftBarActions[i].style.display = "block";
            }
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
        for (var i = 0; i < leftBarActions.length; i++) {
            leftBarActions[i].style.display = "none";
        }
    }
    document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}