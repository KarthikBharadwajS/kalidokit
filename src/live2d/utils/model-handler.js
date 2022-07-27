const modelsList2d = [{
    name: "Hiyori",
    path: "./models/hiyori/hiyori_pro_t10.model3.json",
    icon: "",
    id: 0
}, {
    name: "Maou",
    path: "./models/mao_pro_en/mao_pro_t02.model3.json",
    icon: "",
    id: 1
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

