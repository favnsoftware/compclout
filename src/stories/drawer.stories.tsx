import React from 'react'
import { Drawer } from '../components'
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs'

export default {
    title: "Drawer",
    decorators: [withKnobs]
}


export const primary = () => {
    const visible = boolean('Show Drawer', true)
    const anchorSide = select('Anchor side', ['left', 'right'], 'left')
    const setWidth = number('Drawer width', 200)

    const childExample = <div className='bg-white text-center'>
            <h1>This is a Drawer Example</h1>
            <p>Drawer can, similarly to Modal, display a variety of child component types as well as locking the scroll mechanism when shown.</p>
            <p>The Drawer has a specified width and can also be showed or hidden.</p>
        </div>
        
    return (
        <div>
            <Drawer
            className=''
            children={childExample}
            show={visible}
            anchor={anchorSide}
            width={setWidth | 200}
            />
        </div>
        
    )
};