import React, { FC } from 'react'
import styles from './button.module.css';

// Components
import { Spinner } from '../spinner';

type ButtonTypes = {
    /**
     * ClassName used for Button styling
     */
    className?: string;
    /**
     * Color of the Button
     */
    color?: string;
    /**
     * Preset Button variant styles
     */
    variant?: string;
    /**
     * Boolean value used to disable Button
     */
    disabled?: boolean;
    /**
     * Boolean value used to regulate shadow
     */
    shadow?: boolean;
    /**
     * Boolean value used to regulate spinner animation
     */
    loading?: boolean;
    /**
     * Boolean value used to set Button spinner color to secondary color or light grey
     */
    spinnerColor?: boolean;
    /**
     * Children used by Button
     */
    children: React.ReactNode;
    /**
     * Button click action
     */
    onClick(): void;
    /**
     * Size of Button
     */
    size?: string;
    /**
     * Rest of params
     */
    rest?: any;
}



export const Button:FC<ButtonTypes> = React.forwardRef(({
    className = '',
    color='primary', 
    variant='contained', 
    disabled,
    shadow = true,
    loading, // Necessary? Will not spinner be used in loading logic of websites?
    spinnerColor, 
    children, // ??
    onClick,
    size='md',
    ...rest
}, ref: any) => {

    const btnClick = () => {
        if(!disabled && onClick) {
            onClick();
        }
    }

    let baseStyles = `font-bold px-4 py-2 rounded text-${size}`;
    let btnStyles = `select-none `;
    if(disabled) {
        btnStyles += variant !== 'icon' ? `${baseStyles} cursor-not-allowed opacity-50 bg-gray-400 `
        : 'cursor-not-allowed opacity-50 p-2'
    } else {
        switch(variant) {
            case 'contained': {
                btnStyles += `${baseStyles} bg-${color} hover:bg-${color}-dark text-${color}-text ${shadow ? 'shadow-md' : ''} ${styles['btn-contained']}`;
                break;
            }
            
            case 'outlined': {
                btnStyles += `${baseStyles} border-solid border-${color} border text-${color} hover:bg-gray-100 active:bg-${color} active:text-${color}-text`;
                break;
            }
    
            case 'text': {
                btnStyles += `${baseStyles} bg-transparent text-${color} hover:bg-gray-100 ${styles['btn-contained']}`;
                break;
            }
            
            case 'icon': {
                btnStyles += `bg-transparent text-${color} rounded-full p-2 hover:bg-gray-100 ${styles['btn-contained']}`;
                break;
            }

            default:
        }
    }

    const colorOfSpinner = disabled && !spinnerColor ? 'secondary' : (spinnerColor || 'gray-400');

    return (
        <button 
            className={`${styles.btn} ${className} ${btnStyles} flex items-center justify-center`}
            onClick={btnClick}
            ref={ref}
            {...rest}
        >
            {
                loading && <Spinner className='mr-3' size='xs' color={colorOfSpinner} />
            }
            {children}
        </button>
    )
});


