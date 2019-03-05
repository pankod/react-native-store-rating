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
            ] },
            react_1.default.createElement(react_native_1.TextInput, { ref: (input) => this.TextInputRef = input, accessibilityLabel: this.props.accessibilityLabel, autoCapitalize: this.props.autoCapitalize, autoFocus: this.props.autoFocus, placeholder: this.props.placeholder, autoCorrect: false, value: this.props.value, secureTextEntry: this.props.secureTextEntry, keyboardType: this.props.keyboardType, style: [
                    TextBox_1.TextBoxStyles.textStyle,
                    this.props.textStyle,
                    this.props.disabled ? TextBox_1.TextBoxStyles.disabledStyle : {},
                    this.props.multiline ? { height: 80 } : {},
                ], underlineColorAndroid: 'transparent', onChangeText: this.onChange.bind(this), onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus, editable: !this.props.disabled, multiline: this.props.multiline, onLayout: (event) => this.setState({ textboxWidth: event.nativeEvent.layout.width }), numberOfLines: this.props.multiline ? 4 : 1, maxLength: this.props.maxLength, onSubmitEditing: this.props.onSubmitEditing, returnKeyType: this.props.returnKeyType })));
    }
    focus() {
        this.TextInputRef.focus();
    }
    onChange(text) {
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    }
}
exports.TextBox = TextBox;
//# sourceMappingURL=TextBox.js.map