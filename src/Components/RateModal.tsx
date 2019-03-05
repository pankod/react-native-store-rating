
import React, { Component } from 'react';
import { Dimensions, Linking, Modal, Platform, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import { RateModalStyles } from '../Assets/Styles/RateModal';
import { Button } from './Button';
import { TextBox } from './TextBox';

import { IProps, IState } from '../Interfaces/IRateModal';

const { width } = Dimensions.get('window');

export class RateModal extends Component<IProps, IState> {

	public static defaultProps = {
		modalTitle: 'How many stars do you give to this app?',
		cancelBtnText: 'Cancel',
		count: 5,
		defaultRating: 5,
		nonComment: 'Please specify your opinion.',
		showRating: true,
		isModalOpen: false,
		placeHolderText: 'You can type your comments here ...',
		rateBtnText: 'Rate',
		sendBtnText: 'Send',
		commentOpenRating: 3,
		reviews: ['Terrible', 'Bad', 'Okay', 'Good', 'Great'],
		transparent: true,
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
		const { onClosed, transparent } = this.props;
		const { isModalOpen } = this.state;
		return (
			<Modal transparent={transparent} visible={isModalOpen} onRequestClose={() => onClosed}>
				{this.renderRateModal()}
			</Modal>
		);
	}

	public componentWillMount(): void {
		const { OS } = Platform;
		const { count, showRating, reviews, androidUrl, iosUrl } = this.props;
		if (showRating && reviews.length !== count) {
			throw new Error('You should define at least 5 review values');
		} else if (OS === 'android' && !androidUrl) {
			throw new Error('Enter a valid store url');
		} else if (OS === 'ios' && !iosUrl) {
			throw new Error('Enter a valid store url');
		}
	}

	private ratingOnChange(e: number): void {
		const { ratingOnChange } = this.props;
		if (ratingOnChange) {
			ratingOnChange(e);
		}
		this.setState({ rating: e });
	}

	private renderRateModal(): JSX.Element {
		const {
			modalContainer,
			title, buttonContainer,
			button,
			buttonCancel,
			buttonCancelText,
			errorText,
			modalWrapper,
		} = RateModalStyles;

		const { reviews,
			showRating,
			cancelBtnText,
			count,
			defaultRating,
			nonComment,
			placeHolderText,
			rateBtnText,
			sendBtnText,
			modalTitle,
			style } = this.props;
		return (
			<View style={[modalWrapper, style]}>
				<View style={modalContainer}>
					{!this.state.showContactForm &&
						<React.Fragment>
							<Text style={title}>{modalTitle}</Text>
							<AirbnbRating
								count={count}
								defaultRating={defaultRating}
								size={(width - 150) / 5}
								showRating={showRating}
								reviews={reviews}
								onFinishRating={(e: number) => this.ratingOnChange(e)}
							/>

							<View style={buttonContainer}>
								<View style={{ flex: 1 }}></View>
								<Button
									text={cancelBtnText}
									containerStyle={[button, buttonCancel]}
									textStyle={buttonCancelText}
									onPress={this.onClosed.bind(this)}
								/>
								<Button
									text={rateBtnText}
									containerStyle={button}
									onPress={this.sendRate.bind(this)}
								/>
							</View>
						</React.Fragment>
					}

					{this.state.showContactForm &&
						<React.Fragment>
							<TextBox
								containerStyle={[RateModalStyles.textBox]}
								textStyle={{ paddingVertical: 5 }}
								value={this.state.review}
								placeholder={placeHolderText}
								multiline
								autoFocus
								onChangeText={(value: string) => this.setState({ review: value, reviewError: false })}
							/>

							<View style={buttonContainer}>
								{this.state.reviewError &&
									<Text style={errorText}>
										{nonComment}
									</Text>
								}
								<View style={{ flex: 1 }}></View>
								<Button
									text={sendBtnText}
									containerStyle={button}
									onPress={this.sendContactUsForm.bind(this)}
								/>
							</View>
						</React.Fragment>
					}
				</View>
			</View>
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
		const { commentOpenRating, androidUrl, iosUrl } = this.props;
		if (this.state.rating > commentOpenRating) {
			Platform.OS === 'ios' ?
				Linking.openURL(iosUrl) :
				Linking.openURL(androidUrl);
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
