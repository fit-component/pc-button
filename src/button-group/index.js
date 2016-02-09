import React from 'react'
import classNames from 'classnames'

export default class ButtonGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { vertical, ...others } = this.props

        const groupClass = classNames({
            'btn-group': !vertical,
            'btn-group-vertical': vertical
        })

        return (
            <div {...others} className={groupClass}>
                {this.props.children}
            </div>
        )
    }
}

ButtonGroup.defaultProps = {
    // @desc 是垂直显示
    vertical: false
}