export const settings = {
    disablePreview: false,
    disableGuidelines: false
};

export const settingProxy = new Proxy(settings, {
    set: function (target, key, value) {
        target[key] = value;
        settingOnChangeHandler(key);
        return true;
    }
});

const settingOnChangeHandler = (key) => {
    switch (key) {
        case "disablePreview":
            break;
        case "disableGuidelines":
            break;
        default:
            break;
    }
}