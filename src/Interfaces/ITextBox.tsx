// Global Imports
import {
	KeyboardType,
	KeyboardTypeIOS,
	NativeSyntheticEvent,
	ReturnKeyType,
	TextInputChangeEventData,
	TextStyle,
	ViewStyle,
} from "react-native";

// tslint:disable-next-line: no-namespace
export interface IProps {
	accessibilityLabel?: string;
	autoCapitalize?: "none" | "sentences" | "words" | "characters";
	label?: string;
	value?: string;
	placeholder?: string;
	placeholderTextColor?: string;
	returnKeyType?: ReturnKeyType;
	secureTextEntry?: boolean;
	keyboardType?: KeyboardType | KeyboardTypeIOS;
	autoCorrect?: boolean;
	containerStyle?: ViewStyle | ViewStyle[];
	textStyle?: TextStyle | TextStyle[];
	disabled?: boolean;
	multiline?: boolean;
	autoFocus?: boolean;
	blurOnSubmit?: boolean;
	maxLength?: number;
	onChangeText?(text: string): void;
	onChange?(event: NativeSyntheticEvent<TextInputChangeEventData>): void;
	onBlur?(): void;
	onFocus?(): void;
	onSubmitEditing?(): void;
}

export interface IState {
	text: string;
	textboxWidth: number;
	textboxHeight: number;
}
