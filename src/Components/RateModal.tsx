
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
		ratingOnChange: (e: number) => { console.log(e); },
		onClosed: () => console.log('pressed cancel button'),
		sendContactUsForm: (state: object) => console.log(state),
	};

	constructor(props: IProps) {
		super(props);

		this.state = {
			rating: 5,
			review: '',
			reviewError: false,
			showContactForm: false,
		};
	}

	public render(): JSX.Element {
		const { isModalOpen, onClosed } = this.props;
		return (
			<Modal visible={isModalOpen} onRequestClose={() => onClosed}>
				{this.renderRateModal()}
			</Modal>
		);
	}

	private ratingOnChange(e: number): void {
		const { ratingOnChange } = this.props;
		ratingOnChange(e);
		this.setState({ rating: e });
	}

	private renderRateModal(): JSX.Element {
		const { modalContainer, title, buttonContainer, button, buttonCancel, buttonCancelText, errorText } = RateModalStyles;
		// tslint:disable-next-line: max-line-length
		const { cancelBtnText, count, defaultRating, nonComment, placeHolderText, rateBtnText, sendBtnText, modalTitle } = this.props;
		return (
			<View style={modalContainer}>
				{!this.state.showContactForm &&
					<View>
						<Text style={title}>{modalTitle}</Text>
						<AirbnbRating
							count={count}
							defaultRating={defaultRating}
							size={(width - 150) / 5}
							showRating={false}
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
					</View>
				}

				{this.state.showContactForm &&
					<View>
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
					</View>
				}
			</View>
		);
	}

	private onClosed(): void {
		const { onClosed } = this.props;
		onClosed();
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
		if (this.state.review.length > 0) {
			this.onClosed();
		} else {
			this.setState({ reviewError: true });
		}
	}
}
