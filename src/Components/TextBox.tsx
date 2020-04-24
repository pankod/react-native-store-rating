import React, { Component } from 'react';
import {
	TextInput,
	View,
	TextStyle,
	StyleProp,
} from 'react-native';

import { TextBoxStyles } from '../Assets/Styles/TextBox';

import { IProps, IState } from '../Interfaces/ITextBox';

export class TextBox extends Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);

		this.state = {
			text: props.value,
			textboxHeight: 40,
			textboxWidth: 0,
		};
	}

	public render(): JSX.Element {
		return (
			<View style={[
				TextBoxStyles.containerStyle,
				this.props.containerStyle,
				this.props.multiline ? { height: 80 } : {},
			]}>
				{this.renderTextInput()}
			</View>
		);
	}

	private renderTextInput(): JSX.Element {
		return (
			<TextInput
					accessibilityLabel={this.props.accessibilityLabel}
					autoCapitalize={this.props.autoCapitalize}
					autoFocus={this.props.autoFocus}
					placeholder={this.props.placeholder}
					autoCorrect={false}
					value={this.props.value}
					secureTextEntry={this.props.secureTextEntry}
					keyboardType={this.props.keyboardType}
					style={this.renderStyle()}
					underlineColorAndroid={'transparent'}
					onChangeText={this.onChange.bind(this)}
					onChange={this.props.onChange}
					onBlur={this.props.onBlur}
					onFocus={this.props.onFocus}
					editable={!this.props.disabled}
					multiline={this.props.multiline}
					onLayout={(event) => this.setState({ textboxWidth: event.nativeEvent.layout.width })}
					numberOfLines={this.props.multiline ? 4 : 1}
					maxLength={this.props.maxLength}
					onSubmitEditing={this.props.onSubmitEditing}
					returnKeyType={this.props.returnKeyType}
					placeholderTextColor={this.props.placeholderTextColor}
				/>
		);
	}

	private renderStyle(): StyleProp<TextStyle> {
		return (
			[
				TextBoxStyles.textStyle,
				this.props.textStyle,
				this.props.disabled ? TextBoxStyles.disabledStyle : {},
				this.props.multiline ? { height: 80 } : {},
			]
		);
	}

	private onChange(text: string): void {
		if (this.props.onChangeText) {
			this.props.onChangeText(text);
		}
	}
}
