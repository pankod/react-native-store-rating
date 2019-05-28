
import React, { Component } from 'react';
import { Linking, Modal, Platform, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import { RateModalStyles } from '../Assets/Styles/RateModal';
import { Button } from './Button';
import { TextBox } from './TextBox';

import { IProps, IState } from '../Interfaces/IRateModal';

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
	};

	constructor(props: IProps) {
		super(props);

		this.state = {
			isModalOpen: props.isModalOpen,
			rating: 5,
			review: '',
			reviewError: false,
			showContactForm: false,
		};
	}

	public render(): JSX.Element {
		const { onClosed, isTransparent } = this.props;
		const { isModalOpen } = this.state;
		return (
			<Modal transparent={isTransparent} visible={isModalOpen} onRequestClose={() => onClosed}>
				{this.renderRateModal()}
			</Modal>
		);
	}

	public componentWillMount(): void {
		const { OS } = Platform;
		const { totalStarCount, isVisible, starLabels, playStoreUrl, iTunesStoreUrl } = this.props;
		if (isVisible && starLabels.length !== totalStarCount) {
			throw new Error('You should define at least 5 review values');
		} else if (OS === 'android' && !playStoreUrl) {
			throw new Error('Enter a valid store url');
		} else if (OS === 'ios' && !iTunesStoreUrl) {
			throw new Error('Enter a valid store url');
		}
	}

	public componentWillReceiveProps(nextProps): void {
		if (this.props.isModalOpen !== nextProps.isModalOpen) {
			this.setState({
				isModalOpen: nextProps.isModalOpen,
			});
		}
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
		const { style } = this.props;

		return (
			<View style={[modalWrapper, style]}>
				<View style={modalContainer}>
					{!this.state.showContactForm && this.renderRatingView()}
					{this.state.showContactForm && this.renderContactFormView()}
				</View>
			</View>
		);
	}

	private renderRatingView(): JSX.Element {
		const { title, buttonContainer, button, buttonCancel, buttonCancelText } = RateModalStyles;
		const { starLabels, isVisible, cancelBtnText, totalStarCount, defaultStars, rateBtnText, modalTitle } = this.props;

		return (
			<React.Fragment>
				<Text style={title}>{modalTitle}</Text>
				<AirbnbRating
					count={totalStarCount}
					defaultRating={defaultStars}
					showRating={isVisible}
					reviews={starLabels}
					onFinishRating={(e: number) => this.onStarSelected(e)}
				/>

				<View style={buttonContainer}>
					<View style={{ flex: 1 }}></View>
					<Button
						text={cancelBtnText}
						containerStyle={[button, buttonCancel]}
						textStyle={buttonCancelText}
						onPress={this.onClosed.bind(this)}
					/>
					<Button text={rateBtnText} containerStyle={button} onPress={this.sendRate.bind(this)} />
				</View>
			</React.Fragment>
		);
	}

	private renderContactFormView(): JSX.Element {
		const { buttonContainer, button, errorText } = RateModalStyles;
		const { emptyCommentErrorMessage, commentPlaceholderText, sendBtnText } = this.props;

		return (
			<React.Fragment>
				<TextBox
					containerStyle={[RateModalStyles.textBox]}
					textStyle={{ paddingVertical: 5 }}
					value={this.state.review}
					placeholder={commentPlaceholderText}
					multiline
					autoFocus
					onChangeText={(value: string) => this.setState({ review: value, reviewError: false })}
				/>
				<View>
				{this.state.reviewError &&
						<Text style={errorText}>
							{emptyCommentErrorMessage}
						</Text>
					}
				</View>

				<View style={buttonContainer}>

					<View style={{ flex: 1 }}></View>
					<Button text={sendBtnText} containerStyle={button} onPress={this.sendContactUsForm.bind(this)} />
				</View>
			</React.Fragment>
		);
	}

	private onClosed(): void {
		const { onClosed } = this.props;
		if (onClosed) {
			onClosed();
		} else {
			this.setState({ isModalOpen: false });
		}
	}

	private sendRate(): void {
		const { storeRedirectThreshold, playStoreUrl, iTunesStoreUrl } = this.props;
		if (this.state.rating > storeRedirectThreshold) {
			Platform.OS === 'ios' ?
				Linking.openURL(iTunesStoreUrl) :
				Linking.openURL(playStoreUrl);
		} else {
			this.setState({ showContactForm: true });
		}
	}

	private sendContactUsForm(): void {
		const { sendContactUsForm } = this.props;
		if (this.state.review.length > 0) {
			if (sendContactUsForm && typeof sendContactUsForm === 'function') {
				return sendContactUsForm({ ...this.state });
			}
			throw new Error('You should generate sendContactUsForm function');
		} else {
			this.setState({ reviewError: true });
		}
	}
}
