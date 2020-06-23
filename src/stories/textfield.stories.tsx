import React from 'react'
import { TextField } from '../components'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
    title: "TextField",
    decorators: [withKnobs]
}

export const first = () => {
    const label = text("Label", "Test")
    const hint =  text("Hint", "Her er underteksten")
    const error = boolean("Error", false)
    return (
        <TextField 
            label = {label}
            error = {error}
            front = ''
            hint = {hint}
            //children = ''
        />
    )
};


