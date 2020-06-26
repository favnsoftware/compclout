import React, { FC, useState } from 'react'
import styles from './textfield.module.css'

type TextFieldTypes = {
    /**
     * Label of the TextField
     */
    label: string;
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
    front?: string;
    /**
     * Text right in the field
     */
    back?: string;
}

export const TextField: FC<TextFieldTypes> = ({ label = "Some label", front, hint = "Information", error, back }) => {
    
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
        <div className={styles.base}>
            {
                label && <p className={`${styles.text} subtitle1`}> { label }</p>
            }
            <div className={`${styles.frame} border-${hasFocus ? `primary` : borderColor}`}>
                {
                    front && 
                    <div className={`pl-4`}>
                        { front }
                    </div>
                }
                <input
                    className={`px-4 py-2 border-none rounded focus:outline-none w-full`}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {
                    back &&
                    <div className={`pr-4`}>
                        { back }
                    </div>
                }
                
            </div>
            {
               { hint }  &&
                <p className = {error ? `text-red-600` : ''}>
                    { hint }
                </p>
            }
        </div>
    )
};

