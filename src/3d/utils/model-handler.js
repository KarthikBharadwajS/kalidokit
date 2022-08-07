const modelsList3d = [{
    name: "Asthra",
    path: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2FAshtra.vrm?v=1630342336981",
    icon: "",
    id: 0
}, {
    name: "Sample B",
    path: "https://yeemachine.github.io/k2021/vrm/SampleB.vrm",
    icon: "",
    id: 1
}, {
    name: "Sawa",
    path: "./models/kumiko_sawa.vrm",
    icon: "",
    id: 2
}, {
    name: "Midori",
    path: "https://yeemachine.github.io/k2021/vrm/Midori.vrm",
    icon: "",
    id: 3
}, {
    name: "Alicia",
    path: "https://yeemachine.github.io/k2021/vrm/AliciaSolid.vrm",
    icon: "",
    id: 4
},
{
    name: "Sample C",
    path: "https://yeemachine.github.io/k2021/vrm/SampleC.vrm",
    icon: "",
    id: 5
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
        if (modelArrValue >= modelsList3d.length) modelArrValue = modelArrValue % modelsList3d.length;
        localStorage.setItem("selModValue3d", String(modelArrValue));
    }
}