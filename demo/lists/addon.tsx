import * as React from 'react'
import {Button, ButtonGroup} from '../../src'

const style = {
    margin: 3
}

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Button type="primary"
                        style={style}
                        addonLeft="plus">Primary</Button>
                <Button type="info"
                        style={style}
                        addonLeft="trash-o">Info</Button>
                <Button type="success"
                        style={style}
                        addonRight="minus">Success</Button>
                <Button type="warning"
                        style={style}
                        addonLeft="circle">Warning</Button>
                <Button style={style}
                        addonLeft="plus">Deafult</Button>
            </div>
        )
    }
}