import { FC } from 'react'
import ReactDOM from 'react-dom';

type PortalTypes = {
    /**
     * Children contained inside Portal
     */
    children: any;
}

export const Portal:FC<PortalTypes> = ({children}) => {
    return ReactDOM.createPortal(children, document.body);
}

