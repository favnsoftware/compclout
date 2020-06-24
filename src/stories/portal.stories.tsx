import React from 'react'
import { Portal } from '../components'
import { withKnobs } from '@storybook/addon-knobs'

export default {
    title: "Portal",
    decorators: [withKnobs]
}


export const primary = () => {
    const testElement = <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus elit neque, auctor quis accumsan rhoncus, pharetra eget dui.Maecenas ornare, mi non placerat mollis, nisi velit lobortis augue, et volutpat urna tortor sit amet tellus. Sed in ipsum pretium, ultrices tortor sed, imperdiet eros. Curabitur metus nisl, sollicitudin efficitur lorem a, pellentesque posuere nisl. Phasellus ut orci mattis, fermentum massa et, elementum sem. Praesent pulvinar turpis mauris, vitae pharetra purus bibendum a. Ut commodo nisi eu metus molestie, vitae scelerisque justo sodales.</p>
    return (
        <div>
            <Portal
                children = {testElement}
            />
        </div>
        
    )
};