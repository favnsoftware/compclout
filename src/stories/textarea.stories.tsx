import React from 'react'
import { TextArea } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
    title: "TextArea",
    decorators: [withKnobs]
}



export const primary = () => {
    const maxLength = number("Maximum length", 100);
    return (
        <TextArea 
            onChange = {action('Changed')}
            maxLength = {maxLength}
            value = ''
        />
    )
};


