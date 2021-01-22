"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyles = void 0;
const react_native_1 = require("react-native");
const Color_1 = require("./Color");
const PrimaryColor_1 = require("./PrimaryColor");
exports.ButtonStyles = react_native_1.StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        backgroundColor: Color_1.Color.Transparent,
        borderColor: PrimaryColor_1.PrimaryColor.White,
        borderRadius: 4,
        borderWidth: 1,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
    },
    imageStyle: {
        paddingHorizontal: 10,
    },
    textStyle: {
        color: PrimaryColor_1.PrimaryColor.White,
    },
});
//# sourceMappingURL=Button.js.map