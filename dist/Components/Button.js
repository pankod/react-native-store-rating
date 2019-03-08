"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Button_1 = require("../Assets/Styles/Button");
class Button extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { accessibilityLabel: this.props.accessibilityLabel, style: [Button_1.ButtonStyles.containerStyle, this.props.containerStyle], onPress: this.onPress.bind(this) },
            this.renderImage(),
            react_1.default.createElement(react_native_1.Text, { style: [Button_1.ButtonStyles.textStyle, this.props.textStyle] }, this.props.text)));
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