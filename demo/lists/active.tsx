import * as React from 'react'
import {Button, ButtonGroup} from '../../src'

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <ButtonGroup>
                <Button>Left</Button>
                <Button active>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        )
    }
}