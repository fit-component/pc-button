import * as React from 'react'
import {Button, ButtonGroup} from '../../src'

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>

                <ButtonGroup vertical
                             style={{marginLeft:10}}>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </div>
        )
    }
}