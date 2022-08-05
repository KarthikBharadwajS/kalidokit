// Imports
import { main } from "./modules/facerig/facerig";
import './modules/settings/settings-button';
import { get2DModel } from "./utils/model-handler";

// Renderer
let { path, scale, anchor } = get2DModel();
main(path, scale, anchor);