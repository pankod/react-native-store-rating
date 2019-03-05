
<div align="center">
 <img src="./screenshots/shoot_1.png" width="250">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <img src="./screenshots/shoot_2.png" width="250">
</div>

<br/>
<div align="center"> <h3>React Native Store Rating<h3></div>

<div align="center"> React Native Module to getting users to easily rate your app.</div>
<div align="center"> 
<br/>

[![npm version](https://img.shields.io/npm/v/react-native-store-rating.svg)](https://www.npmjs.com/package/react-responsive-modal)
[![npm downloads per month](https://img.shields.io/npm/dm/react-native-store-rating.svg)](https://www.npmjs.com/package/react-responsive-modal)
[![dependencies Status](https://david-dm.org/pankod/react-native-store-rating/status.svg)](https://david-dm.org/pradel/react-responsive-modal)


<br/>
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>
<br/>
<br/>

Ratings and reviews influence how your app ranks in search results, and can affect whether someone downloads your app. Users can rate your app on a scale of desired amount of stars. They can also add a written review for iOS and Android apps.





## Stores Supported:
|                                                                 **Apple App Store**                                                                 |                                                              **Google Play**                                                              |                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------
|                                                         **✓**                                                         |                                                        **✓**                                                        |                                                                                                                       |
| <img src="https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png" height="60" > |                      <img src="https://elegal.ph/site/wp-content/uploads/2017/08/google-play-icon-logo-favicon-1632434.svg_.jpg" height="60" float="right"> |
|                                             |






## Getting started
```
$ npm install react-native-store-rating --save
```

or

```
$ yarn add react-native-store-rating
```

## Usage
Users are presented with a modal allowing them to choose amount of stars which is defined with `count` props.

The star rate taken from the users is compared to the value defined in "commentOpenRating". If this value is greater than the value of "commentOpenRating", the user is directed to the App store or Google Play Store. If it is equal and smaller, comment popup will be opened and users will be allowed to type comment.

`Example: let's say we defined 3 to commentOpenRating prop`
```javascript
<RateModal
	commentOpenRating={3}
	// ... props
/>
```

`User redirect to App Store or Google Play Store when the given star rate is greater then 3.`

`Comment modal will be opened if the given star rate equal or less then 3.`


## Example
```javascript
import React, { Component } from 'react';
import RateModal from 'react-native-rating-modal';

export default class example extends Component {
    render() {
        return (
            <RateModal
                rateBtnText={'Rate'}
                cancelBtnText={'Cancel'}
                count={5}
                defaultRating={5}
                showRating={true}
                sendBtnText={'Send'}
                placeHolderText={'Placeholder text'}
                nonComment={'Non comment text'}
                androidUrl={'market://details?id=${APP_PACKAGE_NAME}'}
                isModalOpen={true}
                commentOpenRating={3}
                style={{
                    backgroundColor: '#000',
                    paddingHorizontal: 30,
                }}
                ratingOnChange={(e: number) => {
                    console.log('change rating', e);
                }}
                onClosed={() => {
                    console.log('pressed cancel button...')
                }}
                sendContactUsForm={(state: object) => {
                    // state = {
                    // 	isModalOpen: true,
                    // 	rating: 3,
                    // 	review: "Lorem ipsum dolor sit amet...",
                    // 	reviewError:false,
                    // 	showContactForm:true
                    // }
                }}
            />
        )
    }
}

```

<br/>

## Options
<br/>

| Properties | Type | Description |Default | Required |
|------------|-------------------------------------|-------------|----------------------------------------------------------------|-----------------------|
| **rateBtnText**   | `string` | The button text.    | `"Rate"`        | &nbsp;&nbsp; false
| **cancelBtnText**  | `string`  | The cancel button text.  | `"Cancel"`  | &nbsp;&nbsp; false
| **count**     | `number`     | The starts count on modal.   | `5` | &nbsp;&nbsp; false
| **defaulRating** | `number` | If no number set, it will determine 3 stars rating.               |  `5` | &nbsp;&nbsp; false
| **showRating**      | `boolean` | Shows rating on modal. | ` true`   | &nbsp;&nbsp; false
| **sendBtnText** | `string`  | The text of send button. | `"Send"` |  &nbsp;&nbsp; false
| **placeHolderText** | `string` | User review modal placeholder text. | `"You can write your comments here"` | &nbsp;&nbsp; false
| **transparent** |`boolean` | Background style | `true` | &nbsp;&nbsp; false
| **reviews** | `array` | The array of rating title. | `['Terrible', 'Bad', 'Okay', 'Good', 'Great']` | &nbsp;&nbsp; false
| **nonComment** | `string`  | User review comment box validation text | `"Please specify your opinion."` | &nbsp;&nbsp; false
| **isModalOpen** | `boolean`  | Control if the modal open or not. | `false` | &nbsp;&nbsp; false
| **commentOpenRating** | `number`  | ? | `3` | &nbsp;&nbsp; false
| **style** | `Object`  | An object containing the styles objects to style the modal. | `example:`<br>`{ backgroundColor: #000, paddingHorizontal: 30 }` | &nbsp;&nbsp; false
| **ratingOnChange** | `Function`  | Function fired when the rating has changed.| `return: number` | &nbsp;&nbsp; false
| **onClosed** | `Function`  | Function fired when the modal has closed.| `console.warn('pressed cancel button...')` | &nbsp;&nbsp; false
| **sendContactUsForm** | `Function`  | Read component state and function fired when send bottom click | `{ isModalOpen: true, rating: 3, review: "Lorem ipsum dolor sit amet...", reviewError:false, showContactForm:true }` | &nbsp;&nbsp; true
| **androidUrl** | `string`  | Google Play Store App Url <br> `market://details?id=${APP_PACKAGE_NAME}` | | &nbsp;&nbsp; true
| **iosUrl** | `string`  | Apple ITunes App Url <br> `itms-apps://itunes.apple.com/app/${APP_ID}`| | &nbsp;&nbsp; true
<br/>
<br/>


#### Notes

As of version 1.0.0 this package is compatible with both iOS and Android.

#### Releases
- 1.0.0 - Initial release


