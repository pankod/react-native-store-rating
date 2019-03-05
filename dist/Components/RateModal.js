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
            isModalOpen: props.isModalOpen,
            rating: 5,
            review: '',
            reviewError: false,
            showContactForm: false,
        };
    }
    render() {
        const { onClosed, transparent } = this.props;
        const { isModalOpen } = this.state;
        return (react_1.default.createElement(react_native_1.Modal, { transparent: transparent, visible: isModalOpen, onRequestClose: () => onClosed }, this.renderRateModal()));
    }
    componentWillMount() {
        const { OS } = react_native_1.Platform;
        const { count, showRating, reviews, androidUrl, iosUrl } = this.props;
        if (showRating && reviews.length !== count) {
            throw new Error('You should 5 enter review values');
        }
        else if (OS === 'android' && !androidUrl) {
            throw new Error('Enter a valid store url');
        }
        else if (OS === 'ios' && !iosUrl) {
            throw new Error('Enter a valid store url');
        }
    }
    ratingOnChange(e) {
        const { ratingOnChange } = this.props;
        if (ratingOnChange) {
            ratingOnChange(e);
        }
        this.setState({ rating: e });
    }
    renderRateModal() {
        const { modalContainer, title, buttonContainer, button, buttonCancel, buttonCancelText, errorText, modalWrapper, } = RateModal_1.RateModalStyles;
        const { reviews, showRating, cancelBtnText, count, defaultRating, nonComment, placeHolderText, rateBtnText, sendBtnText, modalTitle, style } = this.props;
        return (react_1.default.createElement(react_native_1.View, { style: [modalWrapper, style] },
            react_1.default.createElement(react_native_1.View, { style: modalContainer },
                !this.state.showContactForm &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(react_native_1.Text, { style: title }, modalTitle),
                        react_1.default.createElement(react_native_ratings_1.AirbnbRating, { count: count, defaultRating: defaultRating, size: (width - 150) / 5, showRating: showRating, reviews: reviews, onFinishRating: (e) => this.ratingOnChange(e) }),
                        react_1.default.createElement(react_native_1.View, { style: buttonContainer },
                            react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                            react_1.default.createElement(Button_1.Button, { text: cancelBtnText, containerStyle: [button, buttonCancel], textStyle: buttonCancelText, onPress: this.onClosed.bind(this) }),
                            react_1.default.createElement(Button_1.Button, { text: rateBtnText, containerStyle: button, onPress: this.sendRate.bind(this) }))),
                this.state.showContactForm &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(TextBox_1.TextBox, { containerStyle: [RateModal_1.RateModalStyles.textBox], textStyle: { paddingVertical: 5 }, value: this.state.review, placeholder: placeHolderText, multiline: true, autoFocus: true, onChangeText: (value) => this.setState({ review: value, reviewError: false }) }),
                        react_1.default.createElement(react_native_1.View, { style: buttonContainer },
                            this.state.reviewError &&
                                react_1.default.createElement(react_native_1.Text, { style: errorText }, nonComment),
                            react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                            react_1.default.createElement(Button_1.Button, { text: sendBtnText, containerStyle: button, onPress: this.sendContactUsForm.bind(this) }))))));
    }
    onClosed() {
        const { onClosed } = this.props;
        if (onClosed) {
            onClosed();
        }
        else {
            this.setState({ isModalOpen: false });
        }
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
        const { sendContactUsForm } = this.props;
        if (this.state.review.length > 0) {
            console.log(typeof sendContactUsForm);
            if (sendContactUsForm && typeof sendContactUsForm === 'function') {
                return sendContactUsForm({ ...this.state });
            }
            throw new Error('You should generate sendContactUsForm function');
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
    reviews: ['Terrible', 'Bad', 'Okay', 'Good', 'Great'],
    transparent: true,
};
exports.RateModal = RateModal;
//# sourceMappingURL=RateModal.js.map