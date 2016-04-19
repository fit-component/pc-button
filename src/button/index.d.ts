import * as React from 'react';
import * as module from './module';
import './index.scss';
export default class Button extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.Props;
    state: module.State;
    constructor(props: any);
    handleClick(): void;
    render(): any;
}
