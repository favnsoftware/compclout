import React, { FC } from 'react'
/*import styles from './textfield.module.css'*/

type TextFieldTypes = {
    /**
     * Label of the TextField
     */
    label: string;
    /**
     * Some front i dont know what is
     */
    front: string;
    /**
     * Children??
     */
    children: string;
    /**
     * Hinthint
     */
    hint: string;
    /**
     * If error
     */
    error?: boolean;
}

const BASE = 'mb-6 mt-4 w-full'
const TEXT = 'subtitle1 font-semibold mb-1' 
const FRAME = 'rounded border border-solid flex items-center'
const PADDING_FRONT = 'pl-4'
const INPUT = 'px-4 py-2 border-none rounded focus:outline-none w-full'
const ERROR_MESSAGE = 'text-red-600'


export const TextField: FC<TextFieldTypes> = ({ label = "Some label", front, 
    children, hint = "Hinthint", error }) => {
    return (
        <div className={BASE}>
            {
                label && <p className={TEXT}> { label }</p>
            }
            <div className={FRAME}>
                {
                    front && 
                    <div className={PADDING_FRONT}>
                        { front }
                    </div>
                }
                <input
                    className={INPUT}
                >
                    { children }
                </input>
                
            </div>
            {
                hint &&
                <p className = {error ? ERROR_MESSAGE : ''}>
                    { hint }
                </p>
            }
        </div>
    )
};

