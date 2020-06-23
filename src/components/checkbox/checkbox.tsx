import React, { FC } from 'react'
import styles from './checkbox.module.css'
type CheckBoxTypes = {
    /**
     * Color used by checkbox
     */
    color: string;
    /**
     * Boolean value of checkbox state
     */
    value: boolean;
    /**
     * CheckBox onchange action
     */
    onChange(): void;
}

// change color default to 'primary' when it functions
export const CheckBox:FC<CheckBoxTypes> = ({ onChange, value, color = 'blue-700'}) => {

    const checkedStyles = value ? `border-${color} bg-${color}` : '';

    return (
        <span className={styles.root} >
            <div className={`${styles.box} border-solid border-2 ${checkedStyles}`}>
                <span className={styles.checkmark} />
                <input type='checkbox' checked={value} onChange={onChange} />
            </div>
            
            
        </span>
    )
};