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
        const { onClosed, isTransparent } = this.props;
        const { isModalOpen } = this.state;
        return (react_1.default.createElement(react_native_1.Modal, { transparent: isTransparent, visible: isModalOpen, onRequestClose: () => onClosed }, this.renderRateModal()));
    }
    componentWillMount() {
        const { OS } = react_native_1.Platform;
        const { totalStarCount, isVisible, starLabels, playStoreUrl, iTunesStoreUrl } = this.props;
        if (isVisible && starLabels.length !== totalStarCount) {
            throw new Error('You should define at least 5 review values');
        }
        else if (OS === 'android' && !playStoreUrl) {
            throw new Error('Enter a valid store url');
        }
        else if (OS === 'ios' && !iTunesStoreUrl) {
            throw new Error('Enter a valid store url');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.isModalOpen !== nextProps.isModalOpen) {
            this.setState({
                isModalOpen: nextProps.isModalOpen,
            });
        }
    }
    onStarSelected(e) {
        const { onStarSelected } = this.props;
        if (onStarSelected) {
            onStarSelected(e);
        }
        this.setState({ rating: e });
    }
    renderRateModal() {
        const { modalContainer, modalWrapper } = RateModal_1.RateModalStyles;
        const { style, containerStyle } = this.props;
        return (react_1.default.createElement(react_native_1.View, { style: [modalWrapper, style] },
            react_1.default.createElement(react_native_1.View, { style: [modalContainer, containerStyle] },
                !this.state.showContactForm && this.renderRatingView(),
                this.state.showContactForm && this.renderContactFormView())));
    }
    renderRatingView() {
        const { title, buttonContainer, button, buttonCancel, buttonCancelText } = RateModal_1.RateModalStyles;
        const { starLabels, isVisible, cancelBtnText, totalStarCount, defaultStars, rateBtnText, modalTitle, selectedColor, reviewColor, titleStyle, cancelButtonTextStyle, cancelButtonContainerStyle, rateButtonTextStyle, rateButtonContainerStyle } = this.props;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.Text, { style: [title, titleStyle] }, modalTitle),
            react_1.default.createElement(react_native_ratings_1.AirbnbRating, Object.assign({ count: totalStarCount, defaultRating: defaultStars, showRating: isVisible, reviews: starLabels, onFinishRating: (e) => this.onStarSelected(e) }, {
                reviewColor,
                selectedColor,
            })),
            react_1.default.createElement(react_native_1.View, { style: buttonContainer },
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                react_1.default.createElement(Button_1.Button, { text: cancelBtnText, containerStyle: [button, buttonCancel, cancelButtonContainerStyle], textStyle: [buttonCancelText, cancelButtonTextStyle], onPress: this.onClosed.bind(this) }),
                react_1.default.createElement(Button_1.Button, { text: rateBtnText, textStyle: rateButtonTextStyle, containerStyle: [button, rateButtonContainerStyle], onPress: this.sendRate.bind(this) }))));
    }
    renderContactFormView() {
        const { buttonContainer, button } = RateModal_1.RateModalStyles;
        const { commentPlaceholderText, sendBtnText, rateButtonTextStyle, rateButtonContainerStyle, placeholderTextColor, textBoxStyle } = this.props;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(TextBox_1.TextBox, { containerStyle: [RateModal_1.RateModalStyles.textBox], textStyle: [{ paddingVertical: 5 }, textBoxStyle], value: this.state.review, placeholder: commentPlaceholderText, multiline: true, autoFocus: true, onChangeText: (value) => this.setState({ review: value, reviewError: false }), placeholderTextColor: placeholderTextColor }),
            react_1.default.createElement(react_native_1.View, null, this.state.reviewError && this.renderReviewError()),
            react_1.default.createElement(react_native_1.View, { style: buttonContainer },
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                react_1.default.createElement(Button_1.Button, { text: sendBtnText, textStyle: rateButtonTextStyle, containerStyle: [button, rateButtonContainerStyle], onPress: this.sendContactUsForm.bind(this) }))));
    }
    renderReviewError() {
        const { errorText } = RateModal_1.RateModalStyles;
        const { emptyCommentErrorMessage, errorTextStyle } = this.props;
        return (react_1.default.createElement(react_native_1.Text, { style: [errorText, errorTextStyle] }, emptyCommentErrorMessage));
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
        const { storeRedirectThreshold, playStoreUrl, iTunesStoreUrl } = this.props;
        if (this.state.rating > storeRedirectThreshold) {
            react_native_1.Platform.OS === 'ios' ?
                react_native_1.Linking.openURL(iTunesStoreUrl) :
                react_native_1.Linking.openURL(playStoreUrl);
        }
        else {
            this.setState({ showContactForm: true });
        }
    }
    sendContactUsForm() {
        const { sendContactUsForm } = this.props;
        if (this.state.review.length > 0) {
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
exports.RateModal = RateModal;
RateModal.defaultProps = {
    modalTitle: 'How many stars do you give to this app?',
    cancelBtnText: 'Cancel',
    totalStarCount: 5,
    defaultStars: 5,
    emptyCommentErrorMessage: 'Please specify your opinion.',
    isVisible: true,
    isModalOpen: false,
    commentPlaceholderText: 'You can type your comments here ...',
    rateBtnText: 'Rate',
    sendBtnText: 'Send',
    storeRedirectThreshold: 3,
    starLabels: ['Terrible', 'Bad', 'Okay', 'Good', 'Great'],
    isTransparent: true,
};
//# sourceMappingURL=RateModal.js.map