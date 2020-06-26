import React, { FC, useRef, useState, useEffect } from 'react'
import styles from './collapse.module.css'
type CollapseTypes = {
    /**
     * Boolean value of collapse visible state
     */
    visible: boolean;
    /**
     * Children object contained inside collapse
     */
    children: React.ReactNode;
}

const getElementHeight = (element: React.RefObject<HTMLDivElement>) => {
    if (!element.current) {
        return 'auto';
    }
    return element.current.scrollHeight;
}
export const Collapse:FC<CollapseTypes> = ({visible, children }) => {
    
    const rootRef = useRef<HTMLDivElement>(null);
    const [heightTimeout, setHeightTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if(visible) {
            if(null !== rootRef.current) {
                rootRef.current.style.minHeight = `${getElementHeight(rootRef)}px`; // MinHeight is used the content can grow larger if necessary
                rootRef.current.style.display = 'block';

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

    }, [visible, rootRef, heightTimeout])

    return (
        <div
            className={styles.root}
            ref={rootRef}
        >
            { children }
        </div>
    )
};