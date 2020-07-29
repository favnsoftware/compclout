import React from 'react'
import { Icon } from '../components'
import { withKnobs, select, text } from '@storybook/addon-knobs'


export default {
    title: "Icon",
    decorators: [withKnobs]
}

// Add: select brands icons to a separate icon, make iconColor work?

export const primary = () => {

    const iconType = text('Icon type', 'bell')
    const bgColor = text('Background color', 'bg-white')
    const iconSize = select('Icon size', ["xs" , "lg" , "sm" , "1x" , "2x" , "3x" , "4x" , "5x" , "6x" , "7x" , "8x" , "9x" , "10x"], '1x')
    const iconColor = select('Icon color', ['black', 'white', 'blue', 'red', 'yellow', 'green', 'pink'], 'black')
    return (
        <div>
            <p>Font awesome has a <a className='text-blue-700 underline' href='https://fontawesome.com/v4.7.0/icons/' target='blank'>list of available icons</a></p>
            
            <p className='underline my-8'>Solid FA Icons:</p>
            <Icon
                className={`${bgColor} m-3`}
                icon={iconType}
                size={iconSize}
                color={iconColor}
            />


            {/* <p className='underline'>Example Icons:</p>
            <Icon
                className='m-3'
                icon={far.faBell}
            />
            <Icon
                className='m-3'
                icon={far.faBell}
            />

            <p className='underline'>Regular FA Icons:</p>
            <Icon
                className={`${bgColor} m-3`}
                icon={far.faBell}

            />

             <p className='underline'>Brand FA Icons:</p>
            <Icon
                className={`${bgColor} m-3`}
                icon={fab.faFacebook}

            /> */}

        </div>

    )
};