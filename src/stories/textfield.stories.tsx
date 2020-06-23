import React from 'react'
import { TextField } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
    title: "TextField",
    decorators: [withKnobs]
}

export const first = () => {
    const label = text("Label", "Test")
    return (
        <TextField 
            label={label}
        />
    )
};


