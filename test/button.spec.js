import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from 'fit-button'

describe('fit-button:button', ()=> {
    it('选中状态', ()=> {
        const node = mount(<Button active/>)
        expect(node.find('button').is('.active')).to.equal(true)
    })
})
