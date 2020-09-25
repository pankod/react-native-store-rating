
import React, { Component } from 'react';
import { Linking, Modal, Platform, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import { RateModalStyles } from '../Assets/Styles/RateModal';
import { Button } from './Button';
import { TextBox } from './TextBox';

import { IProps, IState } from '../Interfaces/IRateModal';

let prevIsModalOpen = false;

export class RateModal extends Component<IProps, IState> {

	public static defaultProps = {
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
		ratingComponent: AirbnbRating,
		modalProps: {},
	};

	constructor(props: IProps) {
		super(props);

		this.state = {
			rating: props.defaultStars,
			review: '',
			reviewError: false,
			showContactForm: false,
		};

		const { OS } = Platform;
		const { totalStarCount, isVisible, starLabels, playStoreUrl, iTunesStoreUrl } = props;
		if (isVisible && starLabels.length !== totalStarCount) {
			throw new Error(`You should define at least ${starLabels.length} review values`);
		} else if (OS === 'android' && !playStoreUrl) {
			throw new Error('Enter a valid store url');
		} else if (OS === 'ios' && !iTunesStoreUrl) {
			throw new Error('Enter a valid store url');
		}
	}

	public render(): JSX.Element {
		const { onClosed, isTransparent, modalProps, isModalOpen } = this.props;

		return (
			<Modal
				transparent={isTransparent}
				visible={isModalOpen}
				onRequestClose={onClosed}
				{...modalProps}
			>
				{this.renderRateModal()}
			</Modal>
		);
	}

	public static getDerivedStateFromProps(nextProps: IProps): {rating?: number, showContactForm?: boolean} | null {
		const { isModalOpen, defaultStars } = nextProps;
		const isMounting = isModalOpen && !prevIsModalOpen;
		prevIsModalOpen = isModalOpen;

		if (isMounting) {
			// We might need some resetting, when the modal appears
			return {
				rating: defaultStars,
				showContactForm: false,
				// We don't reset the previous (not sent) review,
				// because the user might continue it
			};
		}

		return null;
	}

	private onStarSelected(e: number): void {
		const { onStarSelected } = this.props;
		if (onStarSelected) {
			onStarSelected(e);
		}
		this.setState({ rating: e });
	}

	private renderRateModal(): JSX.Element {
		const { modalContainer, modalWrapper } = RateModalStyles;
		const { style, styles } = this.props;

		return (
			<View style={[modalWrapper, style, styles.modalWrapper]}>
				<View style={[modalContainer, styles.modalContainer]}>
					{!this.state.showContactForm && this.renderRatingView()}
					{this.state.showContactForm && this.renderContactFormView()}
				</View>
			</View>
		);
	}

	private renderRatingView(): JSX.Element {
		const { title, buttonContainer } = RateModalStyles;
		const { modalTitle, styles } = this.props;

		return (
			<React.Fragment>
				<Text style={[title, styles.title]}>{modalTitle}</Text>
				{this.renderRating()}
				<View style={[buttonContainer, styles.buttonContainer]}>
					<View style={{ flex: 1 }}></View>
					{this.renderCancelButton()}
					{this.renderRateButton()}
				</View>
			</React.Fragment>
		);
	}

	private renderContactFormView(): JSX.Element {
		const { buttonContainer } = RateModalStyles;
		const { styles } = this.props;

		return (
			<React.Fragment>
				{this.renderContactForm()}
				<View>
					{this.state.reviewError && this.renderReviewError()}
				</View>
				<View style={[buttonContainer, styles.buttonContainer]}>
					<View style={{ flex: 1 }}></View>
					{this.renderCancelButton()}
					{this.renderSendButton()}
				</View>
			</React.Fragment>
		);
	}

	private renderRating(): JSX.Element {
		const { ratingProps, ratingComponent, starLabels, isVisible, totalStarCount, defaultStars } = this.props;

		const RatingComponent = ratingComponent;

		return (
			<RatingComponent
				count={totalStarCount}
				defaultRating={defaultStars}
				showRating={isVisible}
				reviews={starLabels}
				onFinishRating={(e: number) => this.onStarSelected(e)}
				{...ratingProps}
			/>
		);
	}

  private renderContactForm(): JSX.Element {
		const { commentPlaceholderText, styles } = this.props;

		return (
			<TextBox
				containerStyle={[RateModalStyles.textBox, styles.textBox]}
				textStyle={{ paddingVertical: 5 }}
				value={this.state.review}
				placeholder={commentPlaceholderText}
				multiline
				autoFocus
				onChangeText={(value: string) => this.setState({ review: value, reviewError: false })}
			/>
		);
	}

	private renderCancelButton(): JSX.Element {
		const { button, buttonCancel, buttonCancelText } = RateModalStyles;
		const { styles, cancelBtnText } = this.props;

		return (
			<Button
				text={cancelBtnText}
				containerStyle={[
					button,
					buttonCancel,
					styles.button,
					styles.buttonCancel,
				]}
				textStyle={[buttonCancelText, styles.buttonText, styles.buttonCancelText]}
				onPress={this.handleCancel.bind(this)}
			/>
		);
	}

	private renderRateButton(): JSX.Element {
		const { button } = RateModalStyles;
		const { rateBtnText, styles } = this.props;

		return (
			<Button
				text={rateBtnText}
				containerStyle={[button, styles.button]}
				textStyle={styles.buttonText}
				onPress={this.sendRate.bind(this)}
			/>
		);
	}

	private renderSendButton(): JSX.Element {
		const { button } = RateModalStyles;
		const { sendBtnText, styles } = this.props;

		const { review } = this.state;

		return (
			<Button
				text={sendBtnText}
				disabled={review === '' && typeof styles.buttonDisabled !== 'undefined'}
				containerStyle={[
					button,
					styles.button,
					...(review === '' ? [styles.buttonDisabled] : []),
				]}
				textStyle={styles.buttonText}
				onPress={this.sendContactUsForm.bind(this)}
			/>
		);
	}

  private renderReviewError(): JSX.Element {
		const { errorText } = RateModalStyles;
		const { emptyCommentErrorMessage, styles } = this.props;

		return (
			<Text style={[errorText, styles.errorText]}>
				{emptyCommentErrorMessage}
			</Text>
		);
	}

	private handleCancel(): void {
		this.props.onClosed();
	}

	private sendRate(): void {
		const { storeRedirectThreshold, playStoreUrl, iTunesStoreUrl, onSendReview, onClosed } = this.props;

		if (this.state.rating > storeRedirectThreshold) {
			// That's why we are actually here
			Platform.OS === 'ios' ?
				Linking.openURL(iTunesStoreUrl) :
				Linking.openURL(playStoreUrl);

      // We might want to do with that info as well as well
      onSendReview({ ...this.state });

      // Close dialog
      onClosed();
		} else {
			this.setState({ showContactForm: true });
		}
	}

	private sendContactUsForm(): void {
		const { sendContactUsForm, onClosed } = this.props;

		if (this.state.review.length > 0) {
			if (sendContactUsForm && typeof sendContactUsForm === 'function') {
				// Reset window
				this.setState({
					review: '',
				})

				// Send data
  			sendContactUsForm({ ...this.state });

  			// Close dialog
  			onClosed();
			} else {
				throw new Error('You should generate sendContactUsForm function');
			}
		} else {
			this.setState({ reviewError: true });
		}
	}
}
