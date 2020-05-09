import React from 'react'
import { Button } from '../components/button'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
    title: "Button4",
    decorators: [withKnobs]
}

export const primary = () => {
    const label = text("Label", "This is a test of the github action")
    const outlined = boolean("Outlined", false)
    return (
        <Button 
            onClick={action('clicked')} 
            outlined={outlined}
            label={label}
        />
    )
}