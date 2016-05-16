import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Button extends React.Component<module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    constructor(props: any) {
        super(props)
    }

    handleClick() {
        if (this.props.disabled || this.props.loading)return
        this.props.onClick()
    }

    render() {
        // addon
        let addon: any = null
        if (this.props.addonLeft || this.props.addonRight) {
            let addonClass = classNames({
                'fa': true,
                ['fa-' + (this.props.addonLeft || this.props.addonRight)]: true,
                'btn-addon-left': this.props.addonLeft,
                'btn-addon-right': this.props.addonRight
            })
            addon = (
                <i className={addonClass}></i>
            )
        }

        // loading
        let loadingComponent: any = null
        if (this.props.loading === true) {
            let loadingClass = classNames({
                'loading-container': true,
                'show': true
            })
            loadingComponent = (
                <div className={loadingClass}>
                    <i className="fa fa-refresh fa-spin"/>
                </div>
            )
        }

        const btnClass = classNames({
            '_namespace': true,
            'btn': true,
            ['btn-' + this.props.type]: true,
            'disabled': this.props.disabled || this.props.loading === true,
            'btn-addon': this.props.addonLeft || this.props.addonRight,
            'btn-rounded': this.props.rounded,
            'btn-lg': this.props.size === module.Size.Large,
            'btn-xs': this.props.size === module.Size.ExtraSmall,
            'btn-sm': this.props.size === module.Size.Small,
            'active': this.props.active,
            [this.props['className']]: !!this.props['className']
        })

        const _others = others(new module.Props(), this.props)

        return (
            <button {..._others} onClick={this.handleClick.bind(this)}
                                 className={btnClass}>
                <div className="button-container">
                    {this.props.addonLeft ? addon : null}
                    <div className="text-child">{this.props.children}</div>
                    {this.props.addonRight ? addon : null}
                    {this.props.loading ? loadingComponent : null}
                </div>
            </button>
        )
    }
}