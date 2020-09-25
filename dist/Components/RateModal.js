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
const ButtonContainer_1 = require("./ButtonContainer");
const TextBox_1 = require("./TextBox");
let prevIsModalOpen = false;
class RateModal extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: props.defaultStars,
            review: '',
            reviewError: false,
            showContactForm: false,
        };
        const { OS } = react_native_1.Platform;
        const { totalStarCount, isVisible, starLabels, playStoreUrl, iTunesStoreUrl } = props;
        if (isVisible && starLabels.length !== totalStarCount) {
            throw new Error(`You should define at least ${starLabels.length} review values`);
        }
        else if (OS === 'android' && !playStoreUrl) {
            throw new Error('Enter a valid store url');
        }
        else if (OS === 'ios' && !iTunesStoreUrl) {
            throw new Error('Enter a valid store url');
        }
    }
    render() {
        const { onClosed, isTransparent, modalProps, isModalOpen } = this.props;
        return (react_1.default.createElement(react_native_1.Modal, Object.assign({ transparent: isTransparent, visible: isModalOpen, onRequestClose: onClosed }, modalProps), this.renderRateModal()));
    }
    static getDerivedStateFromProps(nextProps) {
        const { isModalOpen, defaultStars } = nextProps;
        const isMounting = isModalOpen && !prevIsModalOpen;
        prevIsModalOpen = isModalOpen;
        if (isMounting) {
            return {
                rating: defaultStars,
                showContactForm: false,
            };
        }
        return null;
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
        const { title } = RateModal_1.RateModalStyles;
        const { modalTitle, styles } = this.props;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.Text, { style: [title, styles.title] }, modalTitle),
            this.renderRating(),
            react_1.default.createElement(ButtonContainer_1.ButtonContainer, { styles: styles },
                this.renderCancelButton(),
                this.renderRateButton())));
    }
    renderContactFormView() {
        const { styles } = this.props;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            this.renderContactForm(),
            react_1.default.createElement(react_native_1.View, null, this.state.reviewError && this.renderReviewError()),
            react_1.default.createElement(ButtonContainer_1.ButtonContainer, { styles: styles },
                this.renderCancelButton(),
                this.renderSendButton())));
    }
    renderRating() {
        const { ratingProps, ratingComponent, starLabels, isVisible, totalStarCount, defaultStars } = this.props;
        const RatingComponent = ratingComponent;
        return (react_1.default.createElement(RatingComponent, Object.assign({ count: totalStarCount, defaultRating: defaultStars, showRating: isVisible, reviews: starLabels, onFinishRating: (e) => this.onStarSelected(e) }, ratingProps)));
    }
    renderContactForm() {
        const { commentPlaceholderText, styles } = this.props;
        return (react_1.default.createElement(TextBox_1.TextBox, { containerStyle: [RateModal_1.RateModalStyles.textBox, styles.textBox], textStyle: { paddingVertical: 5 }, value: this.state.review, placeholder: commentPlaceholderText, multiline: true, autoFocus: true, onChangeText: (value) => this.setState({ review: value, reviewError: false }) }));
    }
    renderCancelButton() {
        const { button, buttonCancel, buttonCancelText } = RateModal_1.RateModalStyles;
        const { styles, cancelBtnText } = this.props;
        return (react_1.default.createElement(Button_1.Button, { text: cancelBtnText, containerStyle: [
                button,
                buttonCancel,
                styles.button,
                styles.buttonCancel,
            ], textStyle: [buttonCancelText, styles.buttonText, styles.buttonCancelText], onPress: this.handleCancel.bind(this) }));
    }
    renderRateButton() {
        const { button } = RateModal_1.RateModalStyles;
        const { rateBtnText, styles } = this.props;
        return (react_1.default.createElement(Button_1.Button, { text: rateBtnText, containerStyle: [button, styles.button], textStyle: styles.buttonText, onPress: this.sendRate.bind(this) }));
    }
    renderSendButton() {
        const { button } = RateModal_1.RateModalStyles;
        const { sendBtnText, styles } = this.props;
        const { review } = this.state;
        return (react_1.default.createElement(Button_1.Button, { text: sendBtnText, disabled: review === '' && typeof styles.buttonDisabled !== 'undefined', containerStyle: [
                button,
                styles.button,
                ...(review === '' ? [styles.buttonDisabled] : []),
            ], textStyle: styles.buttonText, onPress: this.sendContactUsForm.bind(this) }));
    }
    renderReviewError() {
        const { errorText } = RateModal_1.RateModalStyles;
        const { emptyCommentErrorMessage, styles } = this.props;
        return (react_1.default.createElement(react_native_1.Text, { style: [errorText, styles.errorText] }, emptyCommentErrorMessage));
    }
    handleCancel() {
        this.props.onClosed();
    }
    sendRate() {
        const { storeRedirectThreshold, playStoreUrl, iTunesStoreUrl, onSendReview, onClosed } = this.props;
        if (this.state.rating > storeRedirectThreshold) {
            react_native_1.Platform.OS === 'ios' ?
                react_native_1.Linking.openURL(iTunesStoreUrl) :
                react_native_1.Linking.openURL(playStoreUrl);
            onSendReview({ ...this.state });
            onClosed();
        }
        else {
            this.setState({ showContactForm: true });
        }
    }
    sendContactUsForm() {
        const { sendContactUsForm, onClosed } = this.props;
        if (this.state.review.length > 0) {
            if (sendContactUsForm && typeof sendContactUsForm === 'function') {
                this.setState({
                    review: '',
                });
                sendContactUsForm({ ...this.state });
                onClosed();
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