import React from 'react'
import { Select } from '../components/select'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
    title: "Select",
    decorators: [withKnobs]
}



export const primary = () => {
    const data = [
        { "value": '1', "label": "Category 1" },
        { "value": '2', "label": "Category 2" },
        { "value": '3', "label": "Category 3" }
    ];
    const placeholder = text("Placeholder", 'Choose Category')
    const color = 'primary'
    return (
        <Select 
            value = ''
            onChange = {action('data selected')}
            data = {data}
            placeholder = {placeholder}
            color = {color}
        />
    )
};


