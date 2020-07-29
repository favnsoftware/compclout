import React, { FC } from 'react'

// Components
import { Modal } from '../modal'

type DrawerTypes = {
    /**
     * Styling used in Drawer div className
     */
    styling?: string;
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

export const Drawer:FC<DrawerTypes> = ({
    styling = 'absolute bg-white shadow-2xl',
    children,
    show,
    anchor = 'left',
    width = 200,
    ...rest
}) => {

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
            <div className={`${styling} ${anchorStyles} `} style={styleObject}>
                { children }
            </div>
        </Modal>
    )
};