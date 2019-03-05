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
const react_native_ratings_1 = require("react-native-ratings");
const RateModal_1 = require("../Assets/Styles/RateModal");
const Button_1 = require("./Button");
const TextBox_1 = require("./TextBox");
const { width } = react_native_1.Dimensions.get('window');
class RateModal extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            review: '',
            reviewError: false,
            showContactForm: false,
        };
    }
    render() {
        const { isModalOpen, onClosed } = this.props;
        return (react_1.default.createElement(react_native_1.Modal, { visible: isModalOpen, onRequestClose: () => onClosed }, this.renderRateModal()));
    }
    ratingOnChange(e) {
        const { ratingOnChange } = this.props;
        ratingOnChange(e);
        this.setState({ rating: e });
    }
    renderRateModal() {
        const { modalContainer, title, buttonContainer, button, buttonCancel, buttonCancelText, errorText } = RateModal_1.RateModalStyles;
        const { cancelBtnText, count, defaultRating, nonComment, placeHolderText, rateBtnText, sendBtnText, modalTitle } = this.props;
        return (react_1.default.createElement(react_native_1.View, { style: modalContainer },
            !this.state.showContactForm &&
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(react_native_1.Text, { style: title }, modalTitle),
                    react_1.default.createElement(react_native_ratings_1.AirbnbRating, { count: count, defaultRating: defaultRating, size: (width - 150) / 5, showRating: false, onFinishRating: (e) => this.ratingOnChange(e) }),
                    react_1.default.createElement(react_native_1.View, { style: buttonContainer },
                        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                        react_1.default.createElement(Button_1.Button, { text: cancelBtnText, containerStyle: [button, buttonCancel], textStyle: buttonCancelText, onPress: this.onClosed.bind(this) }),
                        react_1.default.createElement(Button_1.Button, { text: rateBtnText, containerStyle: button, onPress: this.sendRate.bind(this) }))),
            this.state.showContactForm &&
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(TextBox_1.TextBox, { containerStyle: [RateModal_1.RateModalStyles.textBox], textStyle: { paddingVertical: 5 }, value: this.state.review, placeholder: placeHolderText, multiline: true, autoFocus: true, onChangeText: (value) => this.setState({ review: value, reviewError: false }) }),
                    react_1.default.createElement(react_native_1.View, { style: buttonContainer },
                        this.state.reviewError &&
                            react_1.default.createElement(react_native_1.Text, { style: errorText }, nonComment),
                        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                        react_1.default.createElement(Button_1.Button, { text: sendBtnText, containerStyle: button, onPress: this.sendContactUsForm.bind(this) })))));
    }
    onClosed() {
        const { onClosed } = this.props;
        onClosed();
    }
    sendRate() {
        const { commentOpenRating, androidUrl, iosUrl } = this.props;
        if (this.state.rating > commentOpenRating) {
            react_native_1.Platform.OS === 'ios' ?
                react_native_1.Linking.openURL(iosUrl) :
                react_native_1.Linking.openURL(androidUrl);
        }
        else {
            this.setState({ showContactForm: true });
        }
    }
    sendContactUsForm() {
        if (this.state.review.length > 0) {
            this.onClosed();
        }
        else {
            this.setState({ reviewError: true });
        }
    }
}
RateModal.defaultProps = {
    modalTitle: 'How many stars do you give this app?',
    cancelBtnText: 'Cancel',
    count: 5,
    defaultRating: 5,
    nonComment: 'Please specify your opinion.',
    showRating: true,
    isModalOpen: false,
    placeHolderText: 'You can write your comments and comments here ...',
    rateBtnText: 'Rate',
    sendBtnText: 'Send',
    commentOpenRating: 3,
    ratingOnChange: (e) => { console.log(e); },
    onClosed: () => console.log('pressed cancel button'),
    sendContactUsForm: (state) => console.log(state),
};
exports.RateModal = RateModal;
//# sourceMappingURL=RateModal.js.map