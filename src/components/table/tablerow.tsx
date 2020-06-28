import React, { FC } from 'react'
import styles from './table.module.css'

type TableRowTypes = {
    /**
     * Table row content
     */
    children: React.ReactNode;
}


export const TableRow: FC<TableRowTypes> = ( { children } ) => {

    return (
        <tr>
            { children }
        </tr>
    )
};
