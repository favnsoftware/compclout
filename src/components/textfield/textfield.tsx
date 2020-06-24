import React, { FC, useState } from 'react'
/*import styles from './textfield.module.css'*/

type TextFieldTypes = {
    /**
     * Label of the TextField
     */
    label: string;
    /**
     * Children??
     */
    children: object;
    /**
     * Error message or other information
     */
    hint: string;
    /**
     * If error
     */
    error?: boolean;
    /**
     * Text left in the field
     */
    front: object;
    /**
     * Text right in the field
     */
    back: object;
}

const BASE = 'mb-6 mt-4 w-full'
const TEXT = 'subtitle1 font-semibold mb-1' 
const FRAME = 'rounded border border-solid border-${hasFocus ? color : borderColor} flex items-center'
const PADDING_FRONT = 'pl-4'
const PADDING_BACK = 'pr-4'
const INPUT = 'px-4 py-2 border-none rounded focus:outline-none w-full'
const ERROR_MESSAGE = 'text-red-600'


export const TextField: FC<TextFieldTypes> = ({ label = "Some label", front, hint = "Information", error, children, back }) => {
    
    const [hasFocus, setHasFocus] = useState(false);

    const onFocus = () => {
        setHasFocus(true);
    };  

    const onBlur = () => {
        setHasFocus(false);
    };

    let borderColor = 'gray-400';
    if(error) {
        borderColor = 'red-600'
    }

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
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                </input>
                {
                    back &&
                    <div className={PADDING_BACK}>
                        { back }
                    </div>
                }
                
            </div>
            {
               { hint }  &&
                <p className = {error ? ERROR_MESSAGE : ''}>
                    { hint }
                </p>
            }
        </div>
    )
};

