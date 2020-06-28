import React, { FC } from 'react'
import styles from './table.module.css'

type TableBodyTypes = {
    /**
     * Body components
     */
    children: React.ReactNode;
}


export const TableBody: FC<TableBodyTypes> = ( { children } ) => {

    return (
        <tbody>
            { children }
        </tbody>
    )
};
