import { Component } from 'react';
import { IProps, IState } from '../Interfaces/ITextBox';
export declare class TextBox extends Component<IProps, IState> {
    private TextInputRef;
    constructor(props: IProps);
    render(): JSX.Element;
    focus(): void;
    private onChange;
}
