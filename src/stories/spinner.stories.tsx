import React from 'react'
import { Spinner } from '../components/spinner'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
    title: "Spinner",
    decorators: [withKnobs]
}


export const primary = () => {

    const size = 'md';

    return (
        <Spinner 
            size={size}
        />
    )
};