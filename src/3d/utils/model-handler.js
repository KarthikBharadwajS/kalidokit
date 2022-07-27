const modelsList3d = [{
    name: "Asthra",
    path: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2FAshtra.vrm?v=1630342336981", 
    icon: ""
}, {
    name: "Kumiko Sawa",
    path: "./models/kumiko_sawa.vrm"
}]

// Getter Method 3d
export const get3dModel = () => {
    if (localStorage) {
        const model = localStorage.getItem("selModValue3d");
        if (typeof model === "string") {
            return modelsList3d[+model];
        } else {
            localStorage.setItem("selModValue3d", "0");
            return modelsList3d[0];
        }
    } else {
        return modelsList3d[0];
    }
};

// Setter Method 3d
export const set3dModel = (modelArrValue) => {
    if (localStorage) {
        localStorage.setItem("selModValue3d", String(modelArrValue));
    }
}