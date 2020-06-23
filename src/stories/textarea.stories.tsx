import React from 'react'
import { TextArea } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

export default {
    title: "TextArea",
    decorators: [withKnobs]
}



export const first = () => {
    const maxLength = 100
    return (
        <TextArea 
            onChange = {action('Changed')}
            maxLength = {maxLength}
            value = ''
        />
    )
};


