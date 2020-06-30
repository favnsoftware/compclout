import React from 'react'
import { Button } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

export default {
    title: "Button",
    decorators: [withKnobs]
}


export const primary = () => {
    const buttonVariant = select('Button variant', ['contained', 'outlined', 'text', 'icon'], 'contained')
    const buttonLabel = text('Button label', 'An exiting Label!', 'An exiting Label!')

    return (
        <Button 
            onClick={action('clicked')} 
            variant={buttonVariant}
            children={buttonLabel}

        ></Button>
    )
};