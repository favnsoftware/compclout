import React from 'react'
import { Modal } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
    title: "Modal",
    decorators: [withKnobs]
}


export const primary = () => {
    const childExample = <div className='bg-white rounded text-center'>
            <h1>This is a Modal Example</h1>
            <p>Modal can display a variety of child component types as well as locking the scroll mechanism when shown.</p>
            <p>When clicking outside this Modal child component onBackdropClick will trigger. The Modal can also be centered, showed or hidden.</p>
        </div>
    return (
        <div>
            <Modal
            show={boolean('Show Modal', true)}
            children={childExample}
            center={boolean('Center Modal', true)}
            onBackdropClick={action('Backdrop Clicked')}
            />
        </div>
        
    )
};