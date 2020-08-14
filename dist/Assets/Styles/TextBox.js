"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBoxStyles = void 0;
const react_native_1 = require("react-native");
const Color_1 = require("./Color");
const PrimaryColor_1 = require("./PrimaryColor");
exports.TextBoxStyles = react_native_1.StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 20,
        position: 'relative',
    },
    disabledStyle: {
        backgroundColor: Color_1.Color.Grey['100'],
        color: Color_1.Color.Grey['500'],
    },
    hiddenText: {
        backgroundColor: 'black',
        borderColor: 'transparent',
        color: 'white',
        fontSize: 16,
        left: 1000,
        position: 'absolute',
        top: 1000,
    },
    textStyle: {
        color: PrimaryColor_1.PrimaryColor.Black,
        flex: 1,
        fontSize: 16,
        lineHeight: 20,
        minHeight: 40,
        textAlignVertical: 'center',
    },
});
//# sourceMappingURL=TextBox.js.map