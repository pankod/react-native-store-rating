import React from 'react';
import { View } from 'react-native';

import { RateModalStyles } from '../Assets/Styles/RateModal';
import { IProps } from '../Interfaces/IButtonContainer';

export function ButtonContainer(props: IProps): JSX.Element {
  const { buttonContainer, buttonSpacer } = RateModalStyles;
  const { styles, children } = props;

  return (
    <View style={[buttonContainer, styles.buttonContainer]}>
      <View style={[buttonSpacer, styles.buttonSpacer]}></View>
      {children}
    </View>
  );
}
