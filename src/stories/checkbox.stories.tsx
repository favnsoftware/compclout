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
    const colors = select('Checkbox color', ['primary', 'secondary', 'blue-700', 'green-700', 'red-700', 'yellow-700'], 'primary')
    return (
        <CheckBox
            value = {checked}
            color = {colors}
            onChange = {action('Checked')}
        />
    )
};