import * as React from 'react'
import {Button, ButtonGroup} from '../../src'

const style = {
    margin: 3
}

export default class Demo extends React.Component<any,any> {
    handleClick() {
        console.log('基本用法 点击')
    }

    render() {
        return (
            <div>
                <Button style={style}
                        onClick={this.handleClick.bind(this)}>Default</Button>
                <Button disabled
                        style={style}>Disabled</Button>
            </div>
        )
    }
}