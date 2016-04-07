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
                        style={style}>Primary</Button>
                <Button type="success"
                        style={style}>Success</Button>
                <Button type="info"
                        style={style}>Info</Button>
                <Button type="warning"
                        style={style}>Warning</Button>
                <Button type="danger"
                        style={style}>Danger</Button>
                <Button type="dark"
                        style={style}>Dark</Button>
            </div>
        )
    }
}