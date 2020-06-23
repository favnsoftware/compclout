import React, { FC, useRef, useState, useEffect } from 'react'
import styles from './collapse.module.css'
import { Mutable } from '@storybook/addon-knobs/dist/type-defs';
type CollapseTypes = {
    /**
     * Boolean value of collapse visible state
     */
    visible: boolean;
    /**
     * Children object contained inside collapse
     */
    children: object;
}

const getElementHeight = (el) => {
    if (!el.current) {
        return 'auto';
      }
    return el.current.scrollHeight;
}
export const Collapse:FC<CollapseTypes> = ({visible, children }) => {
    
    const rootRef = useRef<HTMLDivElement>(null);
    const [heightTimeout, setHeightTimeout] = useState(null);

    console.log('console log 1', rootRef)

    useEffect(() => {
        console.log('console log 2', rootRef)


        if(visible) {
            if(null !== rootRef.current) {
                rootRef.current.style.minHeight = `${getElementHeight(rootRef)}px`; // MinHeight is used the content can grow larger if necessary
                rootRef.current.style.display = 'block';
                console.log('console log 3', rootRef)

                // To allow nested collapses or height changes, height needs to be set to 'auto', sometime after minHeight is set
                setHeightTimeout(setTimeout(() => {
                    if(null !== rootRef.current){
                        rootRef.current.style.height = 'auto';                        
                    }

                }, 300))                
            }

            }
        else {
            if(null !== rootRef.current) {
                rootRef.current.style.minHeight = '0';
                rootRef.current.style.height = '0'; // height to hide content

            }

            if(heightTimeout) {
                clearTimeout(heightTimeout);
            }
        }

    }, [visible, rootRef])

    useEffect(() => {}, )
    return (
        <div
            className={styles.root}
            ref={rootRef}
        >
            { children }
        </div>
    )
};