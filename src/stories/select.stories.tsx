import React from 'react'
import { Select } from '../components/select'
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
    title: "Select",
    decorators: [withKnobs]
}



export const primary = () => {
    const value = 'Hallo'
    const data = ['Category 1', 'Category 2', 'Category 3']
    const placeholder = 'Choose Category'
    const color = 'primary'
    return (
        <Select 
            value = {value}
            onChange = {action('data selected')}
            data = {data}
            placeholder = {placeholder}
            color = {color}
        />
    )
};


