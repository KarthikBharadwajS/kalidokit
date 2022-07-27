// Import
import { get2DModel, set2DModel } from "../../utils/model-handler";
import { rerender } from "../facerig/facerig";

// Setting button handler
document.getElementById("settings-2d").addEventListener('click', function (event) {
    // console.log("Click event invoked");
    const modelId = parseInt(get2DModel().id) + 1;
    set2DModel(modelId);
    rerender();
});