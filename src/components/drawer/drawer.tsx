import React, { FC } from 'react'
import styles from './drawer.module.css'

// Components
import { Modal } from '../modal'

type DrawerTypes = {
    /**
     * Drawer className style
     */
    className: string;
    /**
     * Children contained inside Drawer
     */
    children: any;
    /**
     * Boolean value of Drawer visible state
     */
    show: boolean;
    /**
     * Anchor position of Drawer
     */
    anchor: string;
    /**
     * Width of Drawer from anchor position
     */
    width: number;
}


export const Drawer:FC<DrawerTypes> = ({className = styles, children, show, anchor = 'left', width = 200, ...rest}) => {

    const styleObject = {width};
    let anchorStyles = '';
    let transition = '';

    switch(anchor) {

        case 'left': {
            anchorStyles = `top-0 left-0 h-screen`;
            styleObject['width'] = width;
            transition += `horizontal drawer`;
            break;
        }

        case 'right': {
            anchorStyles = `top-0 right-0 h-screen`;
            styleObject['width'] = width;
            transition += `horizontal drawer-reverse`;
            break;
        }
    }

    return (
        <Modal
            show={show}
            {...rest}
            center={false}
            transition={transition}
            >
            <div className={`${className} ${anchorStyles} absolute bg-white shadow-2xl`} style={styleObject}>
                { children }
            </div>
        </Modal>
    )
};