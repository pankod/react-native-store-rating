"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonContainer = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const RateModal_1 = require("../Assets/Styles/RateModal");
function ButtonContainer(props) {
    const { buttonContainer } = RateModal_1.RateModalStyles;
    const { styles, children } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [buttonContainer, styles.buttonContainer] },
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
        children));
}
exports.ButtonContainer = ButtonContainer;
//# sourceMappingURL=ButtonContainer.js.map