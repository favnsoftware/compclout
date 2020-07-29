import React from 'react'
import { Spinner } from '../components/spinner'
import { withKnobs, select, text } from '@storybook/addon-knobs'

export default {
    title: "Spinner",
    decorators: [withKnobs]
}

export const primary = () => {

    const styling = text('Styling of spinner', '')
    const size = select('Spinner size', ['xs', 'sm', 'md', 'lg'], 'md');
    const color = select('Spinner color', ['primary', 'secondary', 'blue-700', 'green-700', 'red-700', 'yellow-700'], 'primary')
    return (
        <Spinner
            className={styling}
            size={size}
            color={color}
        />
    )
};