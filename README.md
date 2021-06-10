
<div align="center">
 <img src="./rating.gif" width="250">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

<br/>
<div align="center"> <h3>React Native Store Rating<h3></div>

<div align="center"> React Native Module to getting users to easily rate and leave a review about your app.</div>
<div align="center"> 



<a href="https://codeclimate.com/github/pankod/react-native-store-rating/maintainability"><img src="https://api.codeclimate.com/v1/badges/99434a23bd16038a55e0/maintainability" /></a>
[![npm version](https://img.shields.io/npm/v/@pankod/react-native-store-rating.svg)](https://www.npmjs.com/package/@pankod/react-native-store-rating)
[![dependencies Status](https://david-dm.org/pankod/react-native-store-rating/status.svg)](https://david-dm.org/pankod/react-native-store-rating)
[![dev-dependencies Status](https://david-dm.org/pankod/react-native-store-rating/dev-status.svg)](https://david-dm.org/pankod/react-native-store-rating?type=dev)


</div>
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>
<br/>
<br/>

Ratings and reviews influence how your app ranks in search results, and can affect whether someone downloads your app. Users can rate your app on a scale of desired amount of stars. They can also add a written review for iOS and Android apps.





## Stores Supported:
| **Apple App Store**  |   **Google Play**  |  
:--------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | 
| **✓** | **✓** | 
| <img src="https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png" height="60" > | <img src="https://elegal.ph/site/wp-content/uploads/2017/08/google-play-icon-logo-favicon-1632434.svg_.jpg" height="60" float="right"> | 




## Getting started
```
$ npm i @pankod/react-native-store-rating
```

or

```
$ yarn add @pankod/react-native-store-rating
```

## Usage
Users are presented with a modal allowing them to choose amount of stars which is defined with `totalStarCount` props.

The star rate taken from the users is compared to the value defined in "storeRedirectThreshold". If this value is greater than the value of "storeRedirectThreshold", the user is directed to the App store or Google Play Store. If it is equal and smaller, comment popup will be opened and users will be allowed to type comment.

Example: Let's say we defined 3 as a value to `storeRedirectThreshold` property,
```javascript
<RateModal
	storeRedirectThreshold={3}
	// ... props
/>
```

User redirect to App Store or Google Play Store when the given star rate is greater then 3.

Comment modal will be opened if the given star rate equal or less then 3.


## Live Demo with Expo

<div align="center">

[![Explore with Expo Snack](/expo_preview.png)](https://snack.expo.io/@pankod/github.com-pankod-react-native-store-rating:example)

</div>


## Example
``` javascript
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import RateModal from '@pankod/react-native-store-rating'

export default class example extends Component {
	state = {
		isModalOpen: false
	}

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		}
	})

	const rateModalStyles = StyleSheet.create({
	    button: {
	      backgroundColor: 'transparent',
	      borderColor: 'transparent',
	      textTransform: 'upparcase'
	    },
	})

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
				<Text> Open Modal </Text>
			</TouchableOpacity>

			<RateModal
			    modalTitle="Your modal title"
				rateBtnText={'Rate'}
				cancelBtnText={'Cancel'}
				totalStarCount={5}
				defaultStars={5}
				isVisible={true}
				sendBtnText={'Send'}
				commentPlaceholderText={'Placeholder text'}
				emptyCommentErrorMessage={'Empty comment error message'}
				iTunesStoreUrl={'itms-apps://itunes.apple.com/app/${APP_ID}'}
				isModalOpen={this.state.isModalOpen}
				storeRedirectThreshold={3}
				style={{
					paddingHorizontal: 30,
				}}
				onStarSelected={(e) => {
					console.log('change rating', e);
				}}
				onClosed={() => {
					console.log('pressed cancel button...')
						this.setState({
						isModalOpen: false
					})
				}}
				sendContactUsForm={(state) => {
					alert(JSON.stringify(state));
				}}
				styles={rateModalStyles}
		        ratingProps={{
		            selectedColor: 'red',
		        }}
		        modalProps={{
		            animationType: 'fade',
		        }}
			/>

			</View >
		)
	}
}
```

<br/>

## Options
<br/>

| Properties | Type | Description |Default |
|------------|-------------------------------------|-------------|----------------------------------------------------------------|
| **playStoreUrl** <br> **required* | `string`  | Google Play Store App Url <br> `market://details?id=${APP_PACKAGE_NAME}` | | 
| **iTunesStoreUrl** <br> **required* | `string`  | Apple ITunes App Url <br> `itms-apps://itunes.apple.com/app/${APP_ID}`| | 
| **modalTitle**   | `string` | The modal header title    | `"How many stars do you give to this app?"`        | 
| **rateBtnText**   | `string` | The button text.    | `"Rate"`        |
| **cancelBtnText**  | `string`  | The cancel button text.  | `"Cancel"`  | 
| **totalStarCount**     | `number`     | The starts count on modal.   | `5` | 
| **defaulRating** | `number` | If no number set, it will determine 3 stars rating.               |  `5` | 
| **isVisible**      | `boolean` | Shows rating on modal. | ` true`   | 
| **sendBtnText** | `string`  | The text of send button. | `"Send"` |  
| **commentPlaceholderText** | `string` | User review modal placeholder text. | `"You can write your comments here"` | 
| **isTransparent** |`boolean` | Background style | `true` | 
| **starLabels** | `array` | The array of rating title. | `['Terrible', 'Bad', 'Okay', 'Good', 'Great']` | 
| **emptyCommentErrorMessage** | `string`  | User review comment box validation text | `"Please specify your opinion."` | 
| **isModalOpen** | `boolean`  | Control if the modal open or not. | `false` | 
| **storeRedirectThreshold** | `number`  | ? | `3` | 
| **style** <br> **deprecated* | `Object`  | An object containing the styles objects to style the modal. Use `styles` instead. | `example:`<br>`{ backgroundColor: #000, paddingHorizontal: 30 }` |
| **styles** | `Object` | An object for the styles for all the components inside RateModal (modal, title, buttons, textbox, error message). It overrides the default styling at `Assets/Styles/Ratemodal.tsx`, use the same properties for selectors as there. | `{}` |
| **ratingComponent** | `React.ElementType` | Your custom rating component. | `react-native-ratings/AirbnbRating` |
| **ratingProps** | `Object` | Necessary props for the rating component not mentioned above. Depends on the component you use, but here you can set the color of the stars for the AirbnbRating as well. | `{}` |
| **modalProps** | `Object` | Props to pass to the React Native's [Modal](https://reactnative.dev/docs/modal) component. | `{}` |

<br/>

## Functions
<br/>

| Properties | Type | Description |Default |
|------------|-------------------------------------|-------------|----------------------------------------------------------------|
| **onStarSelected** | `Function`  | Function fired when the rating has changed.| `return: number` | 
| **onClosed** <br> **required* | `Function`  | Function fired when the modal has closed.| `console.warn('pressed cancel button...')` | 
| **onSendReview** | `Function` | Function fired when redirected to the store. Passes the component state. | |
| **sendContactUsForm** <br> **required* | `Function`  | Read component state and function fired when the user comment was submitted. | `{ isModalOpen: true, rating: 3, review: "Lorem ipsum dolor sit amet...", reviewError:false, showContactForm:true }` | 
<br/>


#### Notes

As of version 1.1.0 this package is compatible with both iOS and Android.

#### Releases
- 1.0.0 - Initial release
- 1.1.0 - Some props and functions name changed && added example app.


