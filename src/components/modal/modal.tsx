import React, { FC, useState, useEffect } from 'react'
import styles from './modal.module.css'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

// Components
import { Portal } from '../portal'

type ModalTypes = {
    /**
     * Show boolean value
     */
    show: boolean;
    /**
     * Children contained inside Modal
     */
    children: any;
    /**
     * Boolean deciding if Modal is center
     */
    center: boolean;
    /**
     * Modal transition style
     */
    transition?: string;
    /**
     * OnClick function that registers if you click outside the Modal
     */
    onBackdropClick?(): void; 
}

export const Modal:FC<ModalTypes> = ({show, children, center = true, transition, onBackdropClick}) => {
    const [hasOpenOnce, setHasOpenOnce] = useState<boolean>(false);
    const [shouldShow, setShouldShow] = useState<boolean>(false);
    const [curTimeout, setCurTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if(show) {
            setHasOpenOnce(true);
            disableBodyScroll(document.body);
        } else {
            enableBodyScroll(document.body);
        }

    }, [show])

    useEffect(() => {
        if(!hasOpenOnce && !show) {
            setHasOpenOnce(true);
            return;
        }

        if(curTimeout) {
            clearTimeout(curTimeout);
        }

        setCurTimeout(setTimeout(() => {
            setShouldShow(show);
            setCurTimeout(null);
        }, show ? 0 : 500));
    }, [show, curTimeout, hasOpenOnce]);

    let curTransition = null;
    if (transition) {
        curTransition = `${transition}-${show ? 'enter' : 'leave'}`
    } else {
        curTransition = `${styles[`bounce-${show ? 'enter' : 'leave'}`]}`;
    }

    return (
        <Portal>
            {
                shouldShow &&
                <div className={`${styles.modal} fixed inset-0 w-full h-full overflow-y-scroll`}>
                    <div 
                        className={`fixed inset-0 w-full h-full bg-black ${styles[`opacity-${show ? 'enter' : 'leave'}`]} ${styles['opacity']}`} 
                        onClick={onBackdropClick}
                    />
                    <div className={`${styles['modal-container']} ${center ? 'flex items-center justify-center' : ''}`}>
                        <div className={curTransition}>
                            { children }
                        </div>
                    </div>
                </div>
            }
        </Portal>
    )

};