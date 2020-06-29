import React, { FC } from 'react'
/*import styles from './textfield.module.css'*/

type TextAreaTypes = {
    /**
     * Field change action
     */
    onChange(): void;
    /**
     * Max length
     */
    maxLength: number;
    /**
     * Verdi
     */
    value: string;

}

const BASE = 'border border-solid border-gray-400 w-full p-4 rounded focus:border-primary focus:outline-none disabled:bg-gray-200 disabled:cursor-not-allowed'
const TEXT = 'caption text-right'

export const TextArea: FC<TextAreaTypes> = ( { onChange, maxLength, value } ) => {
    return (
        <div>
            <textarea
                className={BASE}
                onChange={onChange}
                maxLength={maxLength}
            />
            {
                maxLength &&
                <p className={TEXT}>{ (value || '').length }/{maxLength}</p>
            }
        </div>
    )
};