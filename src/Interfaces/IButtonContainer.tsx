import React from 'react';
import { ViewStyle } from 'react-native';

export interface IProps {
  children: React.ReactNode
  styles: {
    buttonContainer: ViewStyle,
  };
}
