import React, { FC } from 'react'
import styles from './table.module.css'

type TableCellTypes = {
    /**
     * Cell content
     */
    children: React.ReactNode;
}


export const TableCell: FC<TableCellTypes> = ( { children } ) => {

    return (
        <td className='p-3'>
            { children }
        </td>
    )
};
