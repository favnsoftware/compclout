import React from 'react'
import { Modal } from '../components'
import { withKnobs, boolean, action } from '@storybook/addon-knobs'

export default {
    title: "Modal",
    decorators: [withKnobs]
}


export const primary = () => {
    return (
        <div>
            <Modal
            show
            children
            center={boolean('Center Modal', true)}
            onBackdropClick={action('Backdrop Clicked')}
            />
        </div>
        
    )
};