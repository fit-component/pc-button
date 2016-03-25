import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button, ButtonGroup } from 'fit-button'

describe('fit-button:button-group', ()=> {
    it('能渲染', ()=> {
        const node = mount(
            <ButtonGroup>
                <Button>Left</Button>
                <Button active>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        )
        expect(true).to.equal(true)
    })
})
