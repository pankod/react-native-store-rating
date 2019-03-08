import { Component } from 'react';
import { IProps, IState } from '../Interfaces/IButton';
export declare class Button extends Component<IProps, IState> {
    constructor(props: IProps);
    render(): JSX.Element;
    private renderImage;
    private onPress;
}
