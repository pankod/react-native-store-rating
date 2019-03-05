import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Color } from './Color';
import { PrimaryColor } from './PrimaryColor';

export let ButtonStyles = StyleSheet.create({
	containerStyle: {
		alignItems: 'center',
		backgroundColor: Color.Transparent,
		borderColor: PrimaryColor.White,
		borderRadius: 4,
		borderWidth: 1,
		flexDirection: 'row',
		height: 40,
		justifyContent: 'center',
	} as ViewStyle,

	imageStyle: {
		paddingHorizontal: 10,
	} as ImageStyle,

	textStyle: {
		color: PrimaryColor.White,
	} as TextStyle,
});
