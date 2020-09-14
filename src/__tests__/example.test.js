import TestUtils from 'react-addons-test-utils'
import React from 'react'
import SearchBarComponent from '../components/SearchBarComponent'

test.only('example test', () => {
    expect(1 + 1).toBe(2)
});

test('renders with text', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<SearchBarComponent />)
    const button = renderer.getRenderOutput()
    expect(button.type).toBe('button')
    // expect(button.props.children).toBe(text)
})

test('fires the onClick callback', () => {
    const onNameChange = jest.fn()

    const tree = TestUtils.renderIntoDocument(
        <SearchBarComponent onNameChange={onNameChange} />
    )
    const button = TestUtils.findRenderedDOMComponentWithTag(
        tree,
        // 'button'
    )
    TestUtils.Simulate.click(button)
    expect(onNameChange).toBeCalled()
})