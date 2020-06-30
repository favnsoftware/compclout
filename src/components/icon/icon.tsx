import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import { fas }  from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// Added for future compatibility with websites that subscribe to regular icons 
import { far }  from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far)

type IconTypes = {
    /**
     * Specified icon from font-awesome used in the Icon component
     */
    icon: any;
    /**
     * ClassName string that styles the Icon
     */
    className?: string;
    /**
     * Rest. Other specified params used to style or operate Icon
     */
    rest?: any;
    /**
     * Possible children contained inside Icon?
     */
    children?: React.ReactNode;
}

export const Icon:FC<IconTypes> = ({className, ...rest}) => {
    return (
        <FontAwesomeIcon className={className} {...rest} />
    )
};
