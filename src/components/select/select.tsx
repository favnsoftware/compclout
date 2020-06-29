import React, { FC, useState, useEffect, useRef } from 'react'
import styles from './select.module.css'

type SelectTypes = {
    /**
     * Value
     */
    value: any;
    /**
     * action
     */
    onChange(): void;
    /**
     * Data
     */
    data: any[];
    /**
     * Placeholder
     */
    placeholder: any;
    /**
     * Color
     */
    color: string;


}

export const Select: FC<SelectTypes> = ( { value, onChange, data, placeholder, color } ) => {

    const rootRef = useRef(null);
    const optionRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [curElem, setCurElem] = useState(null);

    const handleChange = (value) => {
        onChange && onChange(value);
        setIsOpen(false);
    }

    useEffect(() => {
        const elem = (data || []).find(e => e.value === value);
        setCurElem(elem);
    }, [value, data])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionRef.current && !optionRef.current.contains(event.target)) {
                if(!rootRef.current || (rootRef.current && !rootRef.current.contains(event.target))) {
                    setIsOpen(false);
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [optionRef]);

    return (
        <div className={`relative w-full mb-6`}>

            <div
                ref={rootRef}
                className={`${styles.select} w-full pl-3 pr-1 py-1 bg-white rounded border border-solid border-${isOpen ? color : 'gray-400'} focus:outline-none focus:border-${color} flex items-center cursor-pointer`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={curElem ? '': 'text-gray-600'}>
                    { curElem ? curElem.label : placeholder || ''}
                </div>
                <div className='flex-grow' />
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
            {
                isOpen && data && 
                <div className={`${styles.content} absolute w-full bg-white border border-solid border-gray-400`} ref={optionRef}>
                    {
                        data.map(d => (
                            <div
                                key={d.value}
                                onClick={() => handleChange(d.value)}
                                className={`px-3 py-3 hover:bg-gray-200 cursor-pointer`}
                            >
                                {d.label}
                                
                            </div>
                        ))
                    }
                </div>
            }
        </div>
        
    )
};
