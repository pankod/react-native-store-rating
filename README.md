# React Native Store Rating

<div align="center">
 <img src="./screenshots/shoot_1.png" width="250">
 <img src="./screenshots/shoot_2.png" width="250">
</div>

<br/>

<div align="center"> React Native Module to getting users to easily rate your app.</div>

<br/>

<div align="center"> 

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
| **Apple App Store** |  **Google Play** ||
 ----------: |:-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------
|                                                         **✓**                                                         |                                                        **✓**                                                        |                                                                                                                       |
| <img src="https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png" height="60" > |                      <img src="https://elegal.ph/site/wp-content/uploads/2017/08/google-play-icon-logo-favicon-1632434.svg_.jpg" height="60" float="right"> |






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

Users redirect to App store or Google Market, if they give more then stars which is defined on `commentOpenRating`, otherwise comment pop up will open and allow them to write a review.



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
                ratingChange={(e: number) => {
                    console.log('change rating', e);
                }}
                onClosed={() => {
                    console.log('pressed cancel button...')
                }}
                sendContactUsForm={(state: object) => {
                    // object = {
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


#### options
> 🔑 *Italicize indicates optional*

| Properties | Type                                | Description                                                    | Default               |
|------------|-------------------------------------|----------------------------------------------------------------|-----------------------|
| *rateBtnText*   | `string`                            | The button text.                                                   | `"Rate"`             |
| *cancelBtntEXT*  | `string`                            | The cancel button text.                                                  | `"Cancel"`           |
| *count*     | `number`                            | The starts count on modal.                                     | `3` |
| *defaulRating* | `number` | If no number set, it will determine 3 stars rating.               |  `3`
| *showRating*      | `boolean`                            | Shows rating on modal. | ` true`    |
| *sendBtnText* | `string`  | The text of send button. | `"Send"` |
| *placeHolderText* | `string` | The placeholder text. | `...` |
| *nonComment* | `string`  | ? | `?` |
| *androidUrl* | `string`  |  <br> `example: `'market://details?id=${APP_PACKAGE_NAME}'| `? ` |
| *iosUrl* | `string`  | ? | `?` |
| *isModalOpen* | `boolean`  | Control if the modal open or not. | `true` |
| *commentOpenRating* | `number`  | ? | `?` |
| *style* | `Object`  | An object containing the styles objects to style the modal. | `?` |
| *ratingOnChange* | `Function`  | Function  fired when the rating has changed.| `?` |
| *onClosed* | `Function`  | Function fired when the modal has closed.| `?` |
| *sendContactUsForm* | `Function`  | ?| `?` |


#### Package Names (Google Play & Android) and Bundle Identifiers:

We recommend to followings, if you want to keep package name and Bundle Identifier.

- All lowercase letters
- No numbers
- Use reverse domain style: com.website.appname

#### Notes

As of version 1.0.0 this package is compatible with both iOS and Android.

#### Releases
- 1.0.0 - Initial release


