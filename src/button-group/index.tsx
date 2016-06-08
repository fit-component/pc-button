import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class ButtonGroup extends React.Component<module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    constructor(props: any) {
        super(props)
    }

    render() {
        const groupClass = classNames({
            '_namespace': true,
            'btn-group': !this.props.vertical,
            'btn-group-vertical': this.props.vertical,
            [this.props['className']]: !!this.props['className']
        })

        return (
            <div {...others(new module.Props(), this.props)} className={groupClass}>
                {this.props.children}
            </div>
        )
    }
}