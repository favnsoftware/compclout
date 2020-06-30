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
    const iconSize = select('Icon size', ['base', 'xl', '2xl', '4xl', '6xl'], 'base')
    const bgColor = select('Icon background', ['bg-white', 'bg-black', 'bg-blue-700', 'bg-green-700','bg-red-700', 'bg-yellow-700'], 'bg-white')
    const iconColor = select('Icon color', ['black-700', 'white', 'blue-700', 'green-700','red-700', 'yellow-700'], 'black-700')
    return (
        <div>
            <a className='text-blue-700 underline' href='https://fontawesome.com/v4.7.0/icons/' target='blank'>List of icons</a>

            <p className='underline'>Solid FA Icons:</p>
            <Icon
                className={`${bgColor} text-${iconColor} text-${iconSize} m-3`}
                icon={iconType}
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