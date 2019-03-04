# React Native Store Rating
React Native Store Rating is a cross platform solution to getting users to easily rate your app. 

If the user gives 3 points, the user directs to the market/store,if the user gives 3 points or less than three points, the comment window opens.

<img src="./screenshots/shoot_1.png" width="250">
<img src="./screenshots/shoot_2.png" width="250">

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

#### About Package Names (Google Play & Android) and Bundle Identifiers:
If you want to keep the same package name and bundle identifier everwhere, we suggest the following:
- All lowercase letters
- No numbers
- Use reverse domain style: com.website.appname

#### Notes

As of version 1.0.0 this package is compatible with both iOS and Android.

#### Releases
- 1.0.0 - Initial release


