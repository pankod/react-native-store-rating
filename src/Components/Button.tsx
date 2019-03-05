import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { ButtonStyles } from '../Assets/Styles/Button';

import { IProps, IState } from '../Interfaces/IButton';

export class Button extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<TouchableOpacity
				accessibilityLabel={this.props.accessibilityLabel}
				style={[ButtonStyles.containerStyle, this.props.containerStyle]}
				onPress={this.onPress.bind(this)}
			>
				{this.renderImage()}
				<Text style={[ButtonStyles.textStyle, this.props.textStyle]}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}

	private renderImage(): JSX.Element {
		return this.props.image && <Image style={[ButtonStyles.imageStyle, this.props.imageStyle]} source={this.props.image} />;
	}

	private onPress(): void {
		const { disabled } = this.props;

		if (disabled) {
			return;
		} else {
			if (typeof this.props.onPress === 'function') {
				this.props.onPress();
			}
		}
	}
}
