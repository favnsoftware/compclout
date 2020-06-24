import React, { FC } from 'react'
import { TextField } from '../components'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
    title: "TextField",
    decorators: [withKnobs]
}

export const first = () => {
    const label = text("Label", "Information about the field")
    const hint =  text("Hint", "Error message or other information will appear here")
    const error = boolean("Error", false)
    const Example:FC = () => <p>Object</p>
    return (
        <TextField 
            label = {label}
            error = {error}
            front="Hello"
            hint = {hint}
            back="world"
        />
    )
};


