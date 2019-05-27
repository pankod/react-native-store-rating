import { Component } from 'react';
import { IProps, IState } from '../Interfaces/ITextBox';
export declare class TextBox extends Component<IProps, IState> {
    constructor(props: IProps);
    render(): JSX.Element;
    private renderTextInput;
    private renderStyle;
    private onChange;
}
