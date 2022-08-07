export const modelsList2d = [{
    name: "Hiyori",
    path: "./models/hiyori/hiyori_pro_t10.model3.json",
    icon: "https://yeemachine.github.io/k2021/live2d/4.0/hiyori/icon.jpeg",
    scale: 0.4,
    anchor: { x: 0.5, y: 0.5 },
    id: 0
}, {
    name: "Natori",
    path: "./models/natori_pro_en/runtime/natori_pro_t06.model3.json",
    icon: "https://www.live2d.com/wp/wp-content/themes/cubism/img/dl/sample-jin_02.gif",
    scale: 0.3,
    anchor: { x: 0.5, y: 0.3 },
    id: 1
}, {
    name: "Mark",
    path: "./models/mark_free_en/runtime/mark_free_t04.model3.json",
    icon: "https://www.live2d.com/wp/wp-content/themes/cubism/img/dl/sample-mark_02.gif",
    scale: 0.4,
    anchor: { x: 0.5, y: 0.6 },
    id: 2
}];

// Getter Method 2D
export const get2DModel = () => {
    if (localStorage) {
        const model = localStorage.getItem("selModValue2d");
        if (typeof model === "string") {
            return modelsList2d[+model];
        } else {
            localStorage.setItem("selModValue2d", "0");
            return modelsList2d[0];
        }
    } else {
        return modelsList2d[0];
    }
};

// Setter Method 2D
export const set2DModel = (modelArrValue) => {
    if (localStorage) {
        if(modelArrValue >= modelsList2d.length) modelArrValue = modelArrValue % modelsList2d.length;
        localStorage.setItem("selModValue2d", String(modelArrValue));
    }
};

// Setter Background 3d
export function setBackground(val) {
    if (localStorage) {
        document.getElementById("background-color-pickcer").value = val.replace("0x","#");
        localStorage.setItem("selBackValue2d", val);
    }
}

// Getter Background 3d
export function getBackground() {
    if (localStorage) {
        const background = localStorage.getItem("selBackValue2d");
        if (typeof background === "string") {
            document.getElementById("background-color-pickcer").value = background.replace("0x","#");
            return background;
        } else {
            localStorage.setItem("selBackValue2d", "0x525252");
            return "0x525252";
        }
    } else {
        return "0x525252";
    }
}