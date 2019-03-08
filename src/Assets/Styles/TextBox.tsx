import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Color } from './Color';
import { PrimaryColor } from './PrimaryColor';

export let TextBoxStyles = StyleSheet.create({
	containerStyle: {
		alignItems: 'center',
		flexDirection: 'row',
		height: 40,
		marginHorizontal: 20,
		position: 'relative',
	} as ViewStyle,

	disabledStyle: {
		backgroundColor: Color.Grey['100'],
		color: Color.Grey['500'],
	} as TextStyle,

	hiddenText: {
		backgroundColor: 'black',
		borderColor: 'transparent',
		color: 'white',
		fontSize: 16,
		left: 1000,
		position: 'absolute',
		top: 1000,
	} as ViewStyle,

	textStyle: {
		color: PrimaryColor.Black,
		flex: 1,
		fontSize: 16,
		lineHeight: 20,
		minHeight: 40,
		textAlignVertical: 'center',
	} as TextStyle,
});
