import { ImageStyle, NativeTouchEvent, TextStyle, ViewStyle } from 'react-native';

export interface IProps {
	accessibilityLabel?: string;
	containerStyle?: ViewStyle | ViewStyle[];
	textStyle?: TextStyle | TextStyle[];
	text?: string;
	image?: object;
	imageStyle?: ImageStyle;
	disabled?: boolean;
	onPress?(event?: NativeTouchEvent): void;
}

// tslint:disable-next-line: no-empty-interface
export interface IState {

}
