import React, { FC } from 'react'
import styles from './spinner.module.css'

type SpinnerTypes = {
    /**
     * Size of the spinner
     */
    size: string;
    /**
     * Color of the spinner
     */
    color: string;
    /**
     * className
     */
    className: any;

}


export const Spinner:FC<SpinnerTypes> = ({ size, className}) => {

    return (
        <div className={`${className || ''} ${styles.spinner} ${styles[size]}`} />    
    )
};
