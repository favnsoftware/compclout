import React from 'react'
import { CheckBox } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

export default {
    title: "Checkbox",
    decorators: [withKnobs]
}

export const primary = () => {
    const checked = boolean("Checked", false)
    const colors = ['primary', 'blue-700', 'green-700', 'red-700', 'yellow-700']
    return (
        <CheckBox
            value = {checked}
            color = {select('Color', colors, 'blue-700')}
            onChange = {action('Checked')}
        />
    )
}