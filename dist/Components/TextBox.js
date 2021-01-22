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
exports.TextBox = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const TextBox_1 = require("../Assets/Styles/TextBox");
class TextBox extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.value,
            textboxHeight: 40,
            textboxWidth: 0,
        };
    }
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: [
                TextBox_1.TextBoxStyles.containerStyle,
                this.props.containerStyle,
                this.props.multiline ? { height: 80 } : {},
            ] }, this.renderTextInput()));
    }
    renderTextInput() {
        return (react_1.default.createElement(react_native_1.TextInput, { accessibilityLabel: this.props.accessibilityLabel, autoCapitalize: this.props.autoCapitalize, autoFocus: this.props.autoFocus, placeholder: this.props.placeholder, placeholderTextColor: this.props.placeholderTextColor, autoCorrect: false, value: this.props.value, secureTextEntry: this.props.secureTextEntry, keyboardType: this.props.keyboardType, style: this.renderStyle(), underlineColorAndroid: "transparent", onChangeText: this.onChange.bind(this), onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus, editable: !this.props.disabled, multiline: this.props.multiline, onLayout: (event) => this.setState({
                textboxWidth: event.nativeEvent.layout.width,
            }), numberOfLines: this.props.multiline ? 4 : 1, maxLength: this.props.maxLength, onSubmitEditing: this.props.onSubmitEditing, returnKeyType: this.props.returnKeyType }));
    }
    renderStyle() {
        return [
            TextBox_1.TextBoxStyles.textStyle,
            this.props.textStyle,
            this.props.disabled ? TextBox_1.TextBoxStyles.disabledStyle : {},
            this.props.multiline ? { height: 80 } : {},
        ];
    }
    onChange(text) {
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    }
}
exports.TextBox = TextBox;
//# sourceMappingURL=TextBox.js.map