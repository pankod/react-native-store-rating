"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Button_1 = require("../Assets/Styles/Button");
class Button extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { disabled, accessibilityLabel, containerStyle, textStyle, text } = this.props;
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { disabled: disabled, accessibilityLabel: accessibilityLabel, style: [Button_1.ButtonStyles.containerStyle, containerStyle], onPress: this.onPress.bind(this) },
            this.renderImage(),
            react_1.default.createElement(react_native_1.Text, { style: [Button_1.ButtonStyles.textStyle, textStyle] }, text)));
    }
    renderImage() {
        return this.props.image && react_1.default.createElement(react_native_1.Image, { style: [Button_1.ButtonStyles.imageStyle, this.props.imageStyle], source: this.props.image });
    }
    onPress() {
        const { disabled } = this.props;
        if (disabled) {
            return;
        }
        else {
            if (typeof this.props.onPress === 'function') {
                this.props.onPress();
            }
        }
    }
}
exports.Button = Button;
//# sourceMappingURL=Button.js.map