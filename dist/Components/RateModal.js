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
            rating: props.defaultStars,
            review: '',
            reviewError: false,
            showContactForm: false,
        };
    }
    render() {
        const { onClosed, isTransparent, modalProps } = this.props;
        const { isModalOpen } = this.state;
        return (react_1.default.createElement(react_native_1.Modal, Object.assign({ transparent: isTransparent, visible: isModalOpen, onRequestClose: () => onClosed }, modalProps), this.renderRateModal()));
    }
    UNSAFE_componentWillMount() {
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
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps.isModalOpen);
        if (this.props.isModalOpen !== nextProps.isModalOpen) {
            this.setState({
                isModalOpen: nextProps.isModalOpen,
                rating: nextProps.defaultStars,
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
        const { style, styles } = this.props;
        return (react_1.default.createElement(react_native_1.View, { style: [modalWrapper, style, styles.modalWrapper] },
            react_1.default.createElement(react_native_1.View, { style: [modalContainer, styles.modalContainer] },
                !this.state.showContactForm && this.renderRatingView(),
                this.state.showContactForm && this.renderContactFormView())));
    }
    renderRatingView() {
        const { title, buttonContainer, button, buttonCancel, buttonCancelText } = RateModal_1.RateModalStyles;
        const { ratingProps, ratingComponent, starLabels, isVisible, cancelBtnText, totalStarCount, defaultStars, rateBtnText, modalTitle, styles } = this.props;
        const RatingComponent = ratingComponent;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.Text, { style: [title, styles.title] }, modalTitle),
            react_1.default.createElement(RatingComponent, Object.assign({ count: totalStarCount, defaultRating: defaultStars, showRating: isVisible, reviews: starLabels, onFinishRating: (e) => this.onStarSelected(e) }, ratingProps)),
            react_1.default.createElement(react_native_1.View, { style: [buttonContainer, styles.buttonContainer] },
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                react_1.default.createElement(Button_1.Button, { text: cancelBtnText, containerStyle: [button, buttonCancel, styles.button, styles.buttonCancel], textStyle: [buttonCancelText, styles.buttonText, styles.buttonCancelText], onPress: this.handleCancel.bind(this) }),
                react_1.default.createElement(Button_1.Button, { text: rateBtnText, containerStyle: [button, styles.button], textStyle: styles.buttonText, onPress: this.sendRate.bind(this) }))));
    }
    renderContactFormView() {
        const { buttonContainer, button, buttonCancel, buttonCancelText } = RateModal_1.RateModalStyles;
        const { commentPlaceholderText, sendBtnText, styles, cancelBtnText } = this.props;
        const { review } = this.state;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(TextBox_1.TextBox, { containerStyle: [RateModal_1.RateModalStyles.textBox, styles.textBox], textStyle: { paddingVertical: 5 }, value: this.state.review, placeholder: commentPlaceholderText, multiline: true, autoFocus: true, onChangeText: (value) => this.setState({ review: value, reviewError: false }) }),
            react_1.default.createElement(react_native_1.View, null, this.state.reviewError && this.renderReviewError()),
            react_1.default.createElement(react_native_1.View, { style: [buttonContainer, styles.buttonContainer] },
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                react_1.default.createElement(Button_1.Button, { text: cancelBtnText, containerStyle: [
                        button,
                        buttonCancel,
                        styles.button,
                        styles.buttonCancel,
                    ], textStyle: [buttonCancelText, styles.buttonText, styles.buttonCancelText], onPress: this.handleCancel.bind(this) }),
                react_1.default.createElement(Button_1.Button, { text: sendBtnText, disabled: review === '' && typeof styles.buttonDisabled !== 'undefined', containerStyle: [
                        button,
                        styles.button,
                        ...(review === '' ? [styles.buttonDisabled] : []),
                    ], textStyle: styles.buttonText, onPress: this.sendContactUsForm.bind(this) }))));
    }
    renderReviewError() {
        const { errorText } = RateModal_1.RateModalStyles;
        const { emptyCommentErrorMessage, styles } = this.props;
        return (react_1.default.createElement(react_native_1.Text, { style: [errorText, styles.errorText] }, emptyCommentErrorMessage));
    }
    handleClose() {
        const { onClosed } = this.props;
        if (onClosed) {
            onClosed();
        }
        else {
            this.setState({ isModalOpen: false });
        }
    }
    handleCancel() {
        this.setState({
            showContactForm: false,
        });
        this.handleClose();
    }
    sendRate() {
        const { storeRedirectThreshold, playStoreUrl, iTunesStoreUrl, onSendReview } = this.props;
        if (this.state.rating > storeRedirectThreshold) {
            react_native_1.Platform.OS === 'ios' ?
                react_native_1.Linking.openURL(iTunesStoreUrl) :
                react_native_1.Linking.openURL(playStoreUrl);
            onSendReview({ ...this.state });
            this.handleClose();
        }
        else {
            this.setState({ showContactForm: true });
        }
    }
    sendContactUsForm() {
        const { sendContactUsForm } = this.props;
        if (this.state.review.length > 0) {
            if (sendContactUsForm && typeof sendContactUsForm === 'function') {
                const state = { ...this.state };
                this.setState({
                    showContactForm: false,
                    review: '',
                });
                sendContactUsForm(state);
                this.handleClose();
            }
            else {
                throw new Error('You should generate sendContactUsForm function');
            }
        }
        else {
            this.setState({ reviewError: true });
        }
    }
}
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
    styles: {},
    ratingProps: {},
    ratingComponent: react_native_ratings_1.AirbnbRating,
    modalProps: {},
};
exports.RateModal = RateModal;
//# sourceMappingURL=RateModal.js.map