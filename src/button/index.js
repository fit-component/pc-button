import React from 'react'
import classNames from 'classnames'
import 'fit-style'
import './index.scss'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick() {
        if (this.props.disabled || this.props.loading)return
        this.props.onClick()
    }

    render() {
        const {addonLeft, addonRight, loading, type, disabled, size, active, rounded, children, ...others} = this.props

        // addon
        let addon = null
        if (addonLeft || addonRight) {
            let addonClass = classNames({
                'fa': true,
                ['fa-' + (addonLeft || addonRight)]: true,
                'btn-addon-left': addonLeft,
                'btn-addon-right': addonRight
            })
            addon = (
                <i className={addonClass}></i>
            )
        }

        // loading
        let LoadingComponent = false
        if (loading === true) {
            let loadingClass = classNames({
                'loading-container': true,
                'show': true
            })
            LoadingComponent = (
                <div className={loadingClass}>
                    <i className="fa fa-refresh fa-spin"/>
                </div>
            )
        }

        const btnClass = classNames({
            '_namespace': true,
            'btn': true,
            ['btn-' + type]: true,
            'disabled': disabled || loading === true,
            'btn-addon': addonLeft || addonRight,
            'btn-rounded': rounded,
            'btn-lg': size && size === 'lg',
            'btn-xs': size && size === 'xs',
            'btn-sm': size && size === 'sm',
            'active': active
        })

        return (
            <button {...others} onClick={this.handleClick.bind(this)}
                                className={btnClass}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    {addonLeft ? addon : null}
                    {children}
                    {addonRight ? addon : null}
                    {loading ? LoadingComponent : null}
                </div>
            </button>
        )
    }
}

Button.defaultProps = {
    // @desc 按钮风格
    // @enum default primary success info warning danger dark
    type: 'default',

    // @desc 是否禁用
    disabled: false,

    // @desc 是否处于激活状态
    active: false,

    // @desc 样式
    style: {},

    // @desc 是否loading中
    loading: false,

    // @desc 圆形按钮
    rounded: false,

    // @desc 点击后的回调
    onClick: ()=> {
    }
}