import React from 'react'
import { Button } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

export default {
    title: "Button",
    decorators: [withKnobs]
}


export const primary = () => {
    const buttonLabel = text('An exiting Label!', 'An exiting Label!')
    const buttonVariant = select('Button variant', ['contained', 'outlined', 'text', 'icon'], 'contained')
    const buttonColor = select('Button color', ['blue-700', 'white', 'black', 'red-700', 'yellow-700', 'green-700', 'pink-700'], 'blue-700')
    const buttonSize = select('Icon size', ["xs", "sm" , "md", "lg", "xl" ], 'md')
    const buttonLoading = boolean('Loading', false)
    const buttonDisabled = boolean('Disabled', false)
    const buttonShadow = boolean('Button shadow', false)
    const spinnerPrimaryColor = boolean('Spinner secondary color', false)

    return (
        <Button 
            onClick={action('clicked')} 
            variant={buttonVariant}
            children={buttonLabel}
            color={buttonColor}
            size={buttonSize}
            loading={buttonLoading}
            disabled={buttonDisabled}
            shadow={buttonShadow}
            spinnerColor={spinnerPrimaryColor}
        ></Button>
    )
};