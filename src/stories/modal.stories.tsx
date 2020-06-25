import React from 'react'
import { Modal } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
    title: "Modal",
    decorators: [withKnobs]
}


export const primary = () => {
    const childExample = <div className='bg-white paper rounded text-center'>
            <h1>This is a Modal Example</h1>
            <p>Modal can display a variety of child component types. When clicking outside this Modal child component onBackdropClick will trigger.</p>
            <p>The Modal can also be centered, showed or hidden.</p>
        </div>
    return (
        <div>
            <Modal
            show={boolean('Show Modal', false)}
            children={childExample}
            center={boolean('Center Modal', true)}
            onBackdropClick={action('Backdrop Clicked')}
            />
        </div>
        
    )
};